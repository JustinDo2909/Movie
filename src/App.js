
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/netflixSlice';

function App() {
  const dispatch = useDispatch()
  const fetchTrendingData = async () => {
    try {
        const response = await axios.get('/trending/all/week')

        dispatch(setBannerData(response.data.results))
        console.log(response.data.results)
    } catch (error) {
      console.log("error" , error)
    }
  }

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url+'original'))
      console.log(response.data.images.secure_base_url+'original')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  },[])
  return (
    <main className='pb-14 lg:pb-0'>
      <Header/>
     <div className='min0h-[90]'>
     <Outlet/>
     </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  );
}

export default App;
