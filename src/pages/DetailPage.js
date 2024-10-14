import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import userIcon from '../asset/user-logo.png'

const DetailPage = () => {
  const param = useParams()
  const imageURL = useSelector(state => state.netflixData.imageURL)
  const { data } = useFetchDetails(`/${param?.explore}/${param?.id}`)
  const { data: castData } = useFetchDetails(`/${param.explore}/${param?.id}/credits`)

  return (
    <div className='text-white bg-neutral-900 min-h-screen'>
      {/* Backdrop Section */}
      <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px]'>
        <img
          src={imageURL + data?.backdrop_path}
          alt='Backdrop'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
      </div>

      {/* Poster and Details Section */}
      <div className='flex flex-col md:flex-row md:space-x-10 mt-12 px-6 md:px-20'>
        {/* Poster Image */}
        <div className='flex justify-center md:justify-start mb-6 md:mb-0'>
          <img
            src={imageURL + data?.poster_path}
            alt='Poster'
            className='h-72 w-52 md:h-96 md:w-72 rounded-lg shadow-lg'
          />
        </div>

        {/* Title and Overview */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl font-bold mb-2'>{data?.title || data?.name}</h1>
          <p className='text-neutral-400 italic mb-4'>{data?.tagline}</p>
          <p className='text-lg text-neutral-200 leading-relaxed'>{data?.overview}</p>
          <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 w-40'>
            Play Now
          </button>
        </div>
      </div>

      {/* Cast Section */}
      {castData?.cast?.length > 0 && (
        <div className='mt-12 px-6 md:px-20'>
          <h2 className='text-3xl font-bold mb-4'>Cast</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {castData.cast.slice(0, 12).map((cast) => (
              <div key={cast.id} className='flex flex-col items-center'>
                <img
                  src={imageURL + cast?.profile_path || { userIcon }}
                  alt="?"
                  className='h-36 w-36 object-cover rounded-full shadow-md'
                />
                <p className='text-neutral-300 mt-2'>{cast.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailPage
