import React from "react";
import Hero from "../hero/Hero";

const Home = ({anime}) => {
  return (
    <>
      {anime && <Hero anime={anime}/>}
    </>
  )
}

export default Home;

