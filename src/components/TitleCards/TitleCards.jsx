import React, { useEffect, useState } from 'react';
import cardsData from '../../assets/cards/Cards-data';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzQ2MzNhYTZmYmM2YWYxYzQzZDgwMzQ1MzQxNmIxYyIsInN1YiI6IjY2MzQ5ODM0ODEzY2I2MDEyNzg3OWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwnDy3Y_XCn3WzpgZlJOz_wbziOBZ1Amu66KJOHfWkU'
          }
        });
        const data = await response.json();
        setApiData(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className='mb-8 mt-1 title-cards w-full p-3'>
      <h2 className="mb-2 p-2 font-bold text-white text-3xl">{title}</h2>
      <div className='grid grid-cols-4 xs:grid-cols-2 gap-[40px]'>
      {apiData.map((card) => (
  <div key={card.id} className='card relative group'>
    <Link to={`/player/${card.id}`} key={card.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
        alt={card.name}
        className='rounded-lg cursor-pointer w-full h-auto transition duration-300 transform hover:scale-110'
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transition duration-300 transform group-hover:translate-y-0 group-hover:opacity-100 translate-y-full opacity-0">
        <p className="text-white font-bold text-center">{card.original_title}</p>
      </div>
    </Link>
  </div>
))}

      </div>
    </div>
  );
};

export default TitleCards;
