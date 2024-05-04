import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='navbar  bg-gradient-to-l from-black to-[#6d6d6eb3]   p-4 md:p-[5px] flex justify-between items-center fixed text-sm text-white z-10 w-full   md:flex-row md:justify-between md:gap-6'>
      {/* Logo and Menu */}
      <div className='flex items-center gap-4'>
        <img src={logo} alt="Netflix Logo" className='w-16' />
        {/* Menu for mobile */}
        <ul className='flex gap-6 md:hidden'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>NEW & popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Search, Children, and Bell Icons */}
      <div className='flex items-center gap-4'>
        <img src={search_icon} alt="Search Icon" className='w-6 md:h-[20px]' />
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className='w-6 md:h-[20px]' />
        
        {/* Profile Dropdown */}
        <div className='relative'>
          <img src={profile_img} alt="Profile Image" className='w-10 md:h-10 rounded-full cursor-pointer xs:h-[20px]' onClick={toggleDropdown} />
          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className='absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-md'>
              <button onClick={() => {logout()}} className='block w-full px-4 py-2 text-left underline text-white hover:bg-gray-700'>
                Sign out of Netflix
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
