import React, { useState , useEffect } from 'react'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate  = useNavigate();

  const {id} = useParams();
   
  const [apiData , setApiData] = useState ({
    name : "",
    key : "" ,
    published_at : "",
    typeof : ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzQ2MzNhYTZmYmM2YWYxYzQzZDgwMzQ1MzQxNmIxYyIsInN1YiI6IjY2MzQ5ODM0ODEzY2I2MDEyNzg3OWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwnDy3Y_XCn3WzpgZlJOz_wbziOBZ1Amu66KJOHfWkU'
    }
  };
  
 useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
 }, [])
 

  return (
    <div className=' bg-black text-white h-[100vh] flex flex-col justify-center items-center aspect-w-16 aspect-h-9 '>
      <img src={back_arrow} alt="" className=' absolute left-[20px] w-[50px] top-[20px] cursor-pointer ' onClick={() => {navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0'   width='90%' height='90%' allowFullScreen className=' rounded-lg ' ></iframe>
      <div className='flex items-center justify-between w-[90%] '>
        <p>  {apiData.published_at.slice(0 ,10)} </p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
