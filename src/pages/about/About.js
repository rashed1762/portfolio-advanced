import React from 'react'
import img from '../../assests/rashed4.png'
import './about.css'

const About = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold '> <span className='textabout'>About me</span> </h1>
      <div className='grid grid-cols-2 gap-2 mt-16'>

      <div>

<img className='imgabout' src={img} alt="" />

</div>


<div className='mt-36 text-start'>
  <h1 className='text-2xl'>Hello!</h1>
  <h1 className='text-1xl'>Hello! I am a MERN Stack Web Developer. I have recently completed my graduation in the Daffodil International University, Dept. of Computer Science & Engineering (CSE). I'm very passionate and dedicated to my work. I have a strong passion for the creativity and discipline. Clean code that is maintainable and readable. I am passionate to learn more and get my skill set more polished and learn new technology</h1>

  <h1 className='mt-4 text-xl text=red-600'>Personal Information:</h1>

  <div className='grid grid-cols-2 gap-2'>

  <div>
  <ul className="steps steps-vertical">
  <li className="step step-primary">Name : Rashedul islam</li>
  <li className="step step-primary">Birth Date : 3 auguest 1998</li>
  <li className=" step step-primary">Nationality : Bangaladeshi</li>
  <li className="step step-primary">Language : Bangla,English</li>
</ul>
  </div>

  <div>
  <ul className="steps steps-vertical">
  <li className="step step-primary">Phone : 01314540002</li>
  <li className="step step-primary">Email : rashed1784islam@gmail.com</li>
  <li className="step step-primary">Address : Mymenisngh</li>
  
</ul>
  </div>

  </div>

  
</div>



</div>

<div className='ml-16'>
<h1 className='text-start text-6xl'><span className='skillword font-bold'> My Skill</span></h1>

    <div className='grid grid-cols-4 gap-2 mt-12'> 

    <div className='skill'>
        <h1>Html</h1>
        <div className="radial-progress" style={{"--value":95, }}>95%</div>
    </div>

    <div className='skill'>
        <h1>CSS</h1>
        <div className="radial-progress" style={{"--value":95, }}>95%</div>
    </div>

    <div className='skill'>
        <h1>JAVASCRIPT</h1>
        <div className="radial-progress" style={{"--value":65}}>65%</div>
    </div>

    <div className='skill'>
        <h1>Tailwind</h1>
        <div className="radial-progress" style={{"--value":85}}>85%</div>
    </div>

    </div>

    <div className='grid grid-cols-4 gap-2 mt-8'> 

    <div className='skill'>
        <h1>Bootstrap</h1>
        <div className="radial-progress " style={{"--value":90}}>90%</div>
    </div>

    <div className='skill'>
        <h1>Redux</h1>
        <div className="radial-progress " style={{"--value":45}}>45%</div>
    </div>

    <div className='skill'>
        <h1>React Js</h1>
        <div className="radial-progress" style={{"--value":80}}>90%</div>
    </div>

    <div className='skill'>
        <h1>Node.js</h1>
        <div className="radial-progress" style={{"--value":80}}>80%</div>
    </div>

    

    </div>
    
    <div>

    </div>
</div>

    
    </div>
  )
}

export default About