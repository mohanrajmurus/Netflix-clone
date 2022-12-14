import React,{useState,useEffect} from 'react';
import axios from '../movielist/axiosinstance';
import requests from '../movielist/request';
import Navbar from './Navbar';
import '../css/Banner.css'

function Banner() {
    const [movie,setMovie]=useState([]);
    console.log(movie);
    useEffect(()=> {
        const fetchMovie = async () =>{
            const res = await axios.get(requests.fetchNetflixOriginals);
            setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)]);
        }
        fetchMovie()
    },[])
    function cutDescription(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
  return (
        <header 
            style={{
            backgroundSize:'100% 448px',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"

            }}
          className='banner'>
            <div className=' banner_contents'>
                <h1 className='.banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
                <h1 className='banner_description '>{cutDescription(movie?.overview,150) }</h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
  )
}

export default Banner;