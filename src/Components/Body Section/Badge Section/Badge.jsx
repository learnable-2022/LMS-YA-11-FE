import React from 'react';
import './badge.css';

//Imported Images ==>
import nft from '../../../Assets/badge.png';
import tnf from '../../../Assets/badge2.png';

const Badge = () => {
  return (
    <div className='bad'>
        <h3 className='war'>NFT Rewards</h3>

        <div className='badge flex'>

            <div className='bage flex'>
                <div className='baDiv1 flex'>
                    <img src= { nft } className='dav'/>
                </div>

                <div className='baDiv2 flex'>
                    <img src= { tnf } className='dav'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Badge