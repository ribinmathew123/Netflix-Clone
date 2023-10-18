import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageurl } from "../../constant/constants";
import './Banner.css'


function Banner() {
  const [Movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);

      console.log(response.data.results[0]);

    })

  }, []);



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
       
  //       setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);

  //     });
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [])


  return (
    <div >

      <div className="banner" style={{ backgroundImage: `url(${Movie ? imageurl + Movie.backdrop_path : ""})` }}>


        <div className="content">
          <h1 className="title"> {Movie ? Movie.title : ""} </h1>
          <div className="banner_buttons ">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">{Movie ? Movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;

