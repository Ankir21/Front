import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import OverviewFrom from '../overviewFrom/OverviewFrom';
import { Paper } from '@mui/material';



import './Over.css';






import React from 'react'
const Overviews = ({getAnimeData,anime,overviews,setOverviews}) => {

    const revText = useRef();
    let params = useParams();
    const animeId = params.animeId;

    useEffect(()=>{
        getAnimeData(animeId);
    },[]);

    const addOverviews = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("/api/overview",{overviewBody:rev.value,dbi:animeId});

            const updatedOverviews = [...overviews, {body:rev.value}];
    
            rev.value = "";
    
            setOverviews(updatedOverviews);
        }
        catch(err)
        {
            console.error(err);
        }
        



    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            
            
                
        {anime && anime.map((animeItem) => 
    animeItem.dbi === animeId && (
        <Col key={animeItem.dbi}>
            <div className='OverPoster'>
                <img src={animeItem.poster} alt={animeItem.name} />
                </div>
        </Col>
    )
)}




       


         
            
            
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <OverviewFrom handleSubmit={addOverviews} revText={revText} labelText = "Напишите отзыв" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    overviews.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Overviews
