import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards' // Updated import statement
import Footer from '../../components/Footer/Footer'

const Home = () => {
   return (
    <div className='bg-black'>
      <Navbar />
      <div className='relative'>
        <img src={hero_banner} alt="" className='w-[100%]  banner-img' />
        <div className='absolute w-[100%] pl-[6%] xs:pl-[6%] bottom-0  mb-[30px]'>
          <img src={hero_title} alt="" className=' md:w-[380px]   ' />
          <p className="text-white xs:hidden w-[700px] md:w-[450px] mb-[20px]">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks <br /> on a quest to save the city from an immortal enemy
          </p>

          <div className='flex gap-[20px] xs:mt-[20px]  mb-[50px]'>
            <button className='border-none outline-none p-[10px] inline-flex items-center text-[15px] bg-white cursor-pointer rounded-lg font-bold w-[125px] hover:bg-[#ffffffbf]'>
              <img src={play_icon} alt="" className='w-[25px]' /> Play
            </button>
            <button className='border-none outline-none p-[10px] inline-flex items-center text-[15px] bg-[#6d6d6eb3] cursor-pointer rounded-lg font-bold w-[125px] text-white hover:bg-[#6d6d6e66]'>
              <img src={info_icon} alt="" className='w-[25px]' /> More info
            </button>
          </div>
        </div>
      </div>
      <div className='card-container'>
  <div className='card-wrapper '>
    <TitleCards title={"Now playing"} category={"now_playing"} />
  </div>
  <div className='card-wrapper'>
    <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
  </div>
  <div className='card-wrapper'>
    <TitleCards title={"Only on Netflix"} category={"popular"} />
  </div>
  <div className='card-wrapper  '>
    <TitleCards title={"Upcoming"} category={"upcoming"} />
  </div>
  <div className='card-wrapper  '>
    <TitleCards title={"Top pics for you"} category={"now_playing"} />
  </div>
</div>

      <Footer />
    </div>
  )
}

export default Home
