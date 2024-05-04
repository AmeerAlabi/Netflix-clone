import React, { useEffect, useRef } from 'react';
import './TitleCard.css';
import cards_data from '../../assets/cards/Cards_data';
import cardsData from '../../assets/cards/Cards-data';

const TitleCards = ({title , category}) => {
 
  return (
    <div className='mb-8 mt-1 title-cards w-full p-3'>
      <h2 className="mb-2 p-2 font-bold text-white text-3xl ">{title?title:"Popular on Netflix"}</h2>
      <div className='card-list grid grid-cols-7 gap-2 '>
        {cards_data.map((card, index) => (
          <div key={index} className='card relative '>
            <img
              src={card.image}
              alt={card.name}
              className='rounded-lg cursor-pointer w-[300px] h-auto'
            />
            <p className="text-white absolute bottom-0 w-full   p-4 ">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
