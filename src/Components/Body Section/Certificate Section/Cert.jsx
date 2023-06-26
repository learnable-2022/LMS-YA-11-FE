import React from 'react';
import './cert.css';

//Imported icons >>>>
import { GiTrophyCup } from 'react-icons/gi';

//Imported Images >>>
import img from '../../../Assets/cert.jpg';

const Cert = () => {
  return (

    <div className='cert'>

      <div className='heading'>
        <GiTrophyCup className='cup' />
        <span className='snap'>Rewards</span>
      </div>

      <h2>Certificates</h2>


      <div className='reward flex'>

        <div className='certificate flex'>

          <div className='certDiv1'>
            <img src= { img } className='search' />
            <h3 className='text'>Foundations Of User Interface Design</h3>
            <br/>
            <div className='but flex'><button id='ton'>View Certificate</button></div>
          </div>

          <div className='certDiv2'>
            <img src= { img } className='search' />
            <h3 className='text'>Web Development Basics</h3>
            <br/>
            <div className='but flex'><button id='ton'>View Certificate</button></div>
          </div>

        </div>
      </div>

      <h3 className='h3'>Your Badges</h3>
    </div>
    
  )
}

export default Cert