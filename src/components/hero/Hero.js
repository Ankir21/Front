import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverviewsComponent from '../overviews/Overviews'; 

const Hero = ({ anime }) => {
  const navigate = useNavigate();

  function goToOverviews(animeId) { 
    navigate(`/Overviews/${animeId}`);
  }

  return (
    <div className='anime-carousel-container'>
      <Carousel>
        {anime?.map((animes) => {
          return (
            <Paper key={animes.dbi}>
              <div className='animes-card-container'>
                <div className="animes-card" style={{ "--img": `url(${animes.backdrops[0]})` }}>
                  <div className='animes-detail'>
                    <div className='animes-poster'>
                      <img src={animes.poster} alt='' />
                    </div>
                    <div className='animes-name'>
                      <h4>{animes.name}</h4>
                    </div>
                    <div className='anime-buttons-container'>
                      <Link to={`/Trailer/${animes.trailerLink.substring(animes.trailerLink.length - 11)}`}>
                        <div className='play-button-icon-container'>
                          <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                        </div>
                      </Link>
                      <div className="anime-overview-button-container">
                        <Button variant="info" onClick={() => goToOverviews(animes.dbi)}>Отзывы</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero;


