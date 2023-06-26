import React from 'react';
import './sidebar.css';

//Imported icons =======>
import { CgProfile } from 'react-icons/cg';
import { MdLibraryBooks } from 'react-icons/md';
import { AiOutlineGift } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { GiProgression } from 'react-icons/gi';
import { GoCommentDiscussion } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='menuDiv'>
          <ul className='menuLists grid'>

          <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <MdLibraryBooks className="icon"/>
                <span className='smallText'>
                  Courses
                </span>
              </a>
            </li>

          <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <GiProgression className="icon"/>
                <span className='smallText'>
                  Progress
                </span>
              </a>
            </li>

          <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <CgProfile className='icon'/>
                <span className='smallText'>
                  Profile
                </span>
              </a>
            </li>

            <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <AiOutlineGift className="icon"/>
                <span className='smallText'>
                  Rewards
                </span>
              </a>
            </li>

            <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <GoCommentDiscussion className="icon"/>
              <span className='smallText'>
              Discussion
              </span>
              </a>
            </li>

            <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <CiSettings className="icon"/>
              <span className='smallText'>
                Settings
              </span>
              </a>
            </li>

            <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <FiLogOut className='icon'/>
              <span className='smallText'>
                Logout
              </span>
              </a>
            </li>

          </ul>
        </div>


    </div>
  )
}

export default Sidebar;