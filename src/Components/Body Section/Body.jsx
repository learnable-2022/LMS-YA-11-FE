import React from 'react';
import './body.css';
import Cert from './Certificate Section/Cert';
import Nft from './Nft Section/Nft';
import Badge from './Badge Section/Badge';

const Body = () => {
  return (
    <div className='mainContent'>
      
      <div>
        <Cert/>
      </div>

      <div>
        <Nft/>
      </div>

      <div>
        <Badge/>
      </div>

    </div>
  )
}

export default Body;