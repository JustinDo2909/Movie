import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScollCard from '../components/HorizontalScollCard'
import axios from 'axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trandingMovie = useSelector(state => state.netflixData.bannerData)
  const {data : nowPlayingData} =useFetch('/movie/now_playing')
  const {data : topRatedData} =useFetch('/movie/top_rated')
  const {data : popularTvShowData} =useFetch('/tv/popular')
  const {data : upcomingMovieData} =useFetch('/movie/upcoming')

 
  

 
  return (
    <div>
      <BannerHome />
      <HorizontalScollCard data={trandingMovie} heading={"Trending Movie"} trending={true}/>
      <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} />
      <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}  />
      <HorizontalScollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"} />
      <HorizontalScollCard data={upcomingMovieData} heading={"Upcoming Movie"} media_type={"movie"} />

    </div>
  )
}

export default Home