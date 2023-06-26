import React from 'react';
import './nft.css';

//Imported images >>>
import gim from '../../../Assets/nft1.png';
import gmi from '../../../Assets/nft2.png';

const Nft = () => {
  return (
    <div className='nft'>

        <div className='fnt flex'>
            <img src= { gim }/>
            <img src= { gmi }/>
        </div>

    </div>
  )
}

export default Nft