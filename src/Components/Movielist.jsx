import React,{useState,useEffect} from 'react';
import axios from '../movielist/axiosinstance';
import '../css/movielist.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Movielist({title,fetchUrl,isLargeRow}) {
    const base_Url = 'https://image.tmdb.org/t/p/original'
    const[movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl] = useState(undefined)
    console.log(movies);
    useEffect(()=> {
        const fetchData = async () =>{
            const res = await axios.get(fetchUrl)
            setMovies(res.data.results)
        }

        fetchData()
    },[]);
    const opts = {
      height: "390",
      width: "99%",
      playerVars: {
        autoplay: 0,
      }
    }

    const handleClick = (movie)=>{
      /* console.table(movie?.title) */
      if(trailerUrl){
        setTrailerUrl('')
      } else{
        movieTrailer(movie?.title || '')
        .then(url => {
          const urlparams = new URLSearchParams(new URL(url).search);
          
          setTrailerUrl(urlparams.get('v'))
        }).catch((error)=> console.log(error))
      }
    }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {
          movies.map((movie)=>{
            return <img
            className={isLargeRow ? 'row-poster row-posterlarge':'row-poster'} 
            key={movie.id}
            src={`${base_Url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
            onClick={()=> handleClick(movie)}
          />

          })
        }
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={	trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Movielist