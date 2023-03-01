import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faCircleInfo, faCoffee, faContactBook, faHouse, faLuggageCart, faMessage, faPersonDigging, faPlaneArrival, faRectangleAd, faRectangleList, faRectangleTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import './nav.css'

const Navcomp = () => {
  return (
    <div>
        <div className='menunav ml-2'>
        <div className="menu  rounded-full">
  
  <NavLink to="/" as={Link}>
  <div className="tooltip" data-tip="Home">
  <FontAwesomeIcon className='icon' icon={faHouse} />
    </div>
    </NavLink>

    <NavLink to="/about" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="About Me">
  <FontAwesomeIcon  className='icon' icon={faUser} />
    </div>
    </NavLink>


    <NavLink to="/service" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="Service">
  <FontAwesomeIcon  className='icon' icon={faPersonDigging} />
    </div>
    </NavLink>


    <NavLink to="/portfolio" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="My Work">
  <FontAwesomeIcon  className='icon' icon={faRectangleList} />
    </div>
    </NavLink>


    <NavLink to="/contact" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="Contact">
  <FontAwesomeIcon  className='icon' icon={faMessage} />
    </div>
    </NavLink>
  
  
  
 
</div>
        </div>


    </div>
  )
}

export default Navcomp;