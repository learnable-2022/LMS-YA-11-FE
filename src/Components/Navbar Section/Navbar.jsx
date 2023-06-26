import React from 'react';
import './navbar.css';

//Imported icons =======>
import { CiSearch } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { GrLinkNext } from 'react-icons/gr';

// Imported logos >>>>>
import logo from '../../Assets/logo.png';

//Imported image =======>
import img from '../../Assets/user/(3).png';

const Navbar = () => {
  return (
    <div className='headerSection flex'>

      <div className='logoDiv flex'>
        <img src= { logo } id= 'logo' alt= "Image Name" />
      </div>
            
      <div className='title'>
        <h3>Categories</h3>
      </div>

      <div  className='searchBar flex'>
        <CiSearch className='icon'/>
        <input type='text' placeholder='Search' />
      </div>
    
      <div className='adminDiv flex'>
        <h3>Home</h3>
        <h3>My Courses</h3>
        <IoIosNotificationsOutline className='icon' />
      </div>
    
      <div className='adminImage'>
        <img src={ img } id='admin' alt='Admin Image'/>
        </div>
      </div>
  )
}

export default Navbar