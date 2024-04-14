import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Overviews from './components/overviews/Overviews';
import NotFound from './components/notFound/NotFound';




function App() {

  
  const [anime, setAnime] = useState();
  const [overviews, setOverviews] = useState([]);
  
  const getAnime = async() => {
    try {
      const response = await api.get("/api/v1/anime")
      setAnime(response.data);
    } catch(err) {
      console.log(err);
    }
  }


  const getAnimeData = async (animeId) => {
    try {
        const response = await api.get(`/api/overview/${animeId}`);
        const singleAnime = response.data;
        setOverviews(singleAnime.overviews);
    } catch (error) {
        console.error(error);
    }
}



  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home anime={anime}/>}/>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}/>
          <Route path="/Overviews/:animeId" element ={<Overviews getAnimeData = {getAnimeData} anime={anime} overviews ={overviews} setOverviews = {setOverviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
