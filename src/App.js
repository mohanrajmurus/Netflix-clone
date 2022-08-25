import React, { Component } from 'react';
import Banner from './Components/Banner';
import Movielist from './Components/Movielist';
import Navbar from './Components/Navbar';
import requests from './movielist/request';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
        <Banner/>
        <Movielist title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Movielist title={'Trending'} fetchUrl={requests.fetchTrending} />
        <Movielist title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
        <Movielist title={'Action'} fetchUrl={requests.fetchActionMovies} />
        <Movielist title={'Comedy'} fetchUrl={requests.fetchComedyMovies} />
        <Movielist title={'Documentry'} fetchUrl={requests.fetchDocumentaries} />
        <Movielist title={'Horror'} fetchUrl={requests.fetchHorrorMovies} />
        <Movielist title={'Romance'} fetchUrl={requests.fetchRomanceMovies} />
      </div>
    );
  }
}

export default App;