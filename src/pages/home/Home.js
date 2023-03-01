import React from 'react'
import './home.css'
import img1 from '../../assests/1664127371191-removebg-preview.png'
import { Typewriter } from 'react-simple-typewriter'
import img2 from '../../assests/125.webp'
import About from '../about/About'
import Service from '../service/Service'
import Portfolios from '../Porfolio/Portfolios'
import Contact from '../Contact/Contact'

const Home = () => {
  
  return (
    <div className='home' >
     
    <div className='grid grid-cols-2 gap-2 '>


      <div className='mt-48 text-start ml-24'>
        <h1 className='text-2xl'>Hello!</h1>
        <h1 className='text-5xl'>I am 
        
        <span className='text-green-300 text-4xl font-bold'>
        <Typewriter
            words={[' Rashedul Islam', ' MERN-Stack Developer' , ' Frontend Developer',' Freelancer' ]}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          </span>  
        </h1>
        <p className='mt-6'>i'm a Mern-stack and frontend developer .i strives to buld immersive and beautiful web application through carefully crafted code and user-cenric design.</p>
        <div className='mt-4 p-8 m-8'>
        <a href="Rashed-resume.pdf" download="Rashed-resume.pdf" >
        <button className="btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">Download Cv</button>
                    </a>
        
        
        </div>
       
      </div>
      <div>
      
        <img className='img' src={img1} alt="" />
        
      </div>
 

    </div>

    <div className='mt-36'>
    <About></About>
    </div>

    <div className='mt-36'>
      <Service></Service>
    </div>

    <div className='mt-36'>
      <Portfolios></Portfolios>
    </div>

    <div className='mt-36'>
      <Contact></Contact>
    </div>

    
    
    
    </div>
  )
}

export default Home;