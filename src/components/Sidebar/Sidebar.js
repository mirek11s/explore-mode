import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Sidebar.scss';
import { IconContext } from 'react-icons';

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className="sidebar">
            <Link to='#' className='menu-bars'>
                <BsFillArrowRightSquareFill onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar} >
            <li className="sidebar-toggle">
              <Link to='#' className='menu-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Sidebar