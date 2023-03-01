import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBug, faCompassDrafting, faF, faLaptopCode, faM, } from '@fortawesome/free-solid-svg-icons'
import './service.css'

const Service = () => {
  return (
    <div>
        <h1 className='text-6xl font-bold p-10'> <span className='textabout'>My Service</span> </h1>


        <div className='grid grid-cols-3 gap-3 mt-16 ml-20'>
        <div className="card servicecrd w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center"><FontAwesomeIcon className='serviceicon' icon={faCompassDrafting} /></h2>
    <h1 className='text-2xl font-bold'>Web Design</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam harum laboriosam voluptatibus rerum nobis quo assumenda minima, eum dicta fuga explicabo inventore odit officia est eligendi labore quibusdam soluta facere?</p>
    <div className="card-actions justify-center">
      <button className="btn btnstyle">Read More</button>
    </div>
  </div>
</div>


<div className="card servicecrd w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center"><FontAwesomeIcon className='serviceicon' icon={faM} /></h2>
    <h1 className='text-2xl font-bold'>Mern Stack Development</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam harum laboriosam voluptatibus rerum nobis quo assumenda minima, eum dicta fuga explicabo inventore odit officia est eligendi labore quibusdam soluta facere?</p>
    <div className="card-actions justify-center">
      <button className="btn btnstyle">Read More</button>
    </div>
  </div>
</div>



<div className="card servicecrd w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center"><FontAwesomeIcon className='serviceicon' icon={faF} /></h2>
    <h1 className='text-2xl font-bold'>Frontend Development</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam harum laboriosam voluptatibus rerum nobis quo assumenda minima, eum dicta fuga explicabo inventore odit officia est eligendi labore quibusdam soluta facere?</p>
    <div className="card-actions justify-center">
      <button className="btn btnstyle">Read More</button>
    </div>
  </div>
</div>
        </div>



        <div className='grid grid-cols-3 gap-3 mt-16 ml-20'>
        <div className="card servicecrd w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center"><FontAwesomeIcon className='serviceicon' icon={faLaptopCode} /></h2>
    <h1 className='text-2xl font-bold'>Capture Code</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam harum laboriosam voluptatibus rerum nobis quo assumenda minima, eum dicta fuga explicabo inventore odit officia est eligendi labore quibusdam soluta facere?</p>
    <div className="card-actions justify-center">
      <button className="btn btnstyle">Read More</button>
    </div>
  </div>
</div>


<div className="card servicecrd w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center"><FontAwesomeIcon className='serviceicon' icon={faBug} /></h2>
    <h1 className='text-2xl font-bold'>Bug Fixing</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam harum laboriosam voluptatibus rerum nobis quo assumenda minima, eum dicta fuga explicabo inventore odit officia est eligendi labore quibusdam soluta facere?</p>
    <div className="card-actions justify-center">
      <button className="btn btnstyle">Read More</button>
    </div>
  </div>
</div>



<div className="card servicecrd w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center"><FontAwesomeIcon className='serviceicon' icon={faCompassDrafting} /></h2>
    <h1 className='text-2xl font-bold'>Responsiove Design</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam harum laboriosam voluptatibus rerum nobis quo assumenda minima, eum dicta fuga explicabo inventore odit officia est eligendi labore quibusdam soluta facere?</p>
    <div className="card-actions justify-center">
      <button className="btn btnstyle">Read More</button>
    </div>
  </div>
</div>
        </div>

    </div>
  )
}

export default Service;