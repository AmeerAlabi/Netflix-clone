import React from 'react'
import you_icon from '../../assets/youtube_icon.png'
import ig_icon from '../../assets/instagram_icon.png'
import twit_icon from '../../assets/twitter_icon.png'
import face_icon from '../../assets/facebook_icon.png'

function Footer() {
  return (
    <div className=' p-[30px]'>
      <div className='  flex  gap-[20px] mt-[40px]  m-auto  justify-center items-center '>
        <img src={you_icon} alt="" className='  w-[30px] cursor-pointer '  />
        <img src={ig_icon} alt="" className='  w-[30px] cursor-pointer '  />
        <img src={twit_icon} alt="" className='  w-[30px] cursor-pointer '  />
        <img src={face_icon} alt="" className='  w-[30px] cursor-pointer '  />
      </div>

      <ul className=' grid grid-cols-4   list-none   gap-[15px]  items-center text-white mt-[40px]   justify-center'>
        <li>Audio Descripton </li>
        <li>Help Centre </li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use </li>
        <li>Privacy </li>
        <li>Legal Notices</li>
        <li>Cookie preferences</li>
        <li>Corporate Information </li>
        <li>Contact us </li>
      </ul>
      <p className=' text-gray-600  text-[16px] text-center mt-[40px] '>1997-2024 Netflix-clone inc</p>
    </div>
  )
}

export default Footer
