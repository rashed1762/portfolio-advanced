import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './portfolio.css'
import img1 from '../../assests/travelguru1.PNG'
import img2 from '../../assests/online bazar12.PNG'
import img3 from '../../assests/hyde1.PNG'
import img4 from '../../assests/furns1.PNG'
import img5 from '../../assests/cara.PNG'

import travelimg1 from '../../assests/travelguru2.PNG'
import travelimg2 from '../../assests/travelguru3.PNG'
import travelimg3 from '../../assests/travelguru4.PNG'
import travelimg4 from '../../assests/travelguru5.PNG'
import travelimg5 from '../../assests/travelguru6.PNG'
import travelimg6 from '../../assests/travelguru7.PNG'
import travelimg7 from '../../assests/travelguru8.PNG'
import travelimg8 from '../../assests/travelguru2.PNG'


import onlinebazarimg1 from '../../assests/online bazar2.PNG'
import onlinebazarimg2 from '../../assests/online bazar3.PNG'
import onlinebazarimg3 from '../../assests/online bazar4.PNG'
import onlinebazarimg4 from '../../assests/online bazar5.PNG'
import onlinebazarimg5 from '../../assests/online bazar6.PNG'
import onlinebazarimg6 from '../../assests/online bazar7.PNG'
import onlinebazarimg8 from '../../assests/online bazar9.PNG'


import furnsimg1 from '../../assests/furns6.PNG'
import furnsimg2 from '../../assests/furns2.PNG'
import furnsimg3 from '../../assests/furns3.PNG'
import furnsimg4 from '../../assests/furns4.PNG'
import furnsimg5 from '../../assests/furns5.PNG'
import furnsimg6 from '../../assests/furns6.PNG'


import hydeimg1 from '../../assests/hyde2.PNG'
import hydeimg2 from '../../assests/hyde3.PNG'
import hydeimg3 from '../../assests/hyde4.PNG'
import hydeimg4 from '../../assests/hyde5.PNG'
import hydeimg5 from '../../assests/hyde6.PNG'
import hydeimg6 from '../../assests/hyde7.PNG'
import hydeimg7 from '../../assests/hyde8.PNG'


import khudaimg1 from '../../assests/khudalagse1.PNG'
import khudaimg2 from '../../assests/khudalagse2.PNG'
import khudaimg3 from '../../assests/khudalagse3.PNG'
import khudaimg4 from '../../assests/khudalagse4.PNG'
import khudaimg5 from '../../assests/khudalagse5.PNG'
import khudaimg6 from '../../assests/khudalagse6.PNG'
import khudaimg7 from '../../assests/khudalagse7.PNG'


import caraimg1 from '../../assests/cara1.PNG'
import caraimg2 from '../../assests/cara2.PNG'
import caraimg3 from '../../assests/cara3.PNG'
import caraimg4 from '../../assests/cara4.PNG'
import caraimg5 from '../../assests/cara5.PNG'






import Slider from 'react-slick';


const Portfolios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <div>
      <h1 className='text-6xl font-bold p-10'> <span className='textabout'>My Success Work</span> </h1>


    


    <div className='grid grid-cols-2 gap-3 mt-16 ml-20 mr-20'>



{/* travelgur........................................................................ */}
      <div>
        <h1 className='text-2xl font-bold mb-2'>Travelguru</h1>
        <img className='projectimg' src={img1} alt="" />
        <label htmlFor="travelguru-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 

        <div>
        <input type="checkbox" id="travelguru-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="travelguru-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Travelguru</h3>
   <div>
   <Slider {...settings}>
          <div>
          <img className='modalimg' src={img1} alt="" />
          </div>
          <div>
          <img className='modalimg' src={travelimg2} alt="" />
          </div>
          <div>
          <img className='modalimg' src={travelimg3} alt="" />
          </div>
          <div>
          <img className='modalimg' src={travelimg4} alt="" />
          </div>
          <div>
          <img className='modalimg' src={travelimg5} alt="" />
          </div>
          <div>
          <img className='modalimg' src={travelimg6} alt="" />
          </div>
          <div>
          <img className='modalimg' src={travelimg7} alt="" />
          </div>
          <div>
          <img className='modalimg' src={travelimg8} alt="" />
          </div>
         
        </Slider>

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Travelguru</span> is a traveling website.In Now a day's in our world their has many natural place that give people refreshment and relaxing time.So that reason we make a website that help to travel easily find room in their suitable place and suitable date's. by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">People can choose their place and choose their rooms.</li>
          <li className="step step-primary">People can also buy traveling product from this website.</li>
          <li className="step step-primary">Specific user can see specific product and room which they buy and book room.</li>
          <li className="step step-primary">We ensure strong security system.</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">Admin can control make admin and see all user and delete user and delete item.</li>
          <li className="step step-primary">Email :travelguru@gmail.com , password:123456 you can join as a admin and see all user which is hidden from normal user.</li>
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
   </div>
    <div >
    <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
        
      </div>
{/* travelguru........................................................................ */}




{/* onlinebazar........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2'>Online Bazar</h1>
        <img className='projectimg' src={img2} alt="" />
        <label htmlFor="onlinebazar-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://online-bazar-7f899.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 

        <div>
        <input type="checkbox" id="onlinebazar-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="onlinebazar-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Online Bazar</h3>
   <div>
   <Slider {...settings}>
          <div>
          <img className='modalimg' src={img2} alt="" />
          </div>
          <div>
          <img className='modalimg' src={onlinebazarimg1} alt="" />
          </div>
          <div>
          <img className='modalimg' src={onlinebazarimg2} alt="" />
          </div>
          <div>
          <img className='modalimg' src={onlinebazarimg3} alt="" />
          </div>
          <div>
          <img className='modalimg' src={onlinebazarimg4} alt="" />
          </div>
          <div>
          <img className='modalimg' src={onlinebazarimg5} alt="" />
          </div>
          <div>
          <img className='modalimg' src={onlinebazarimg6} alt="" />
          </div>
          
          <div>
          <img className='modalimg' src={onlinebazarimg8} alt="" />
          </div>
         
        </Slider>

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Online Bazar</span> is online platform that is help a people shopping their daily need from our website from home.Day by day our population grow heavily and people are stuck at  traffic jam.So everyone suffer to collect daily bazar.so we solve the proble.people can easily shop their daily need .by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">People can choose their product and buy easily..</li>
          <li className="step step-primary">Specific user can see specific product  which they want to buy</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">We ensure strong security system.</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">User can see only booking and buying products.</li>
          <li className="step step-primary">Admin can control make admin and see all user and delete user and delete item.</li>
          <li className="step step-primary">Email :admin@gmail.com, password:123456 you can join as a admin and see all user which is hidden from normal user.</li>
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
   </div>
   <div >
   <a target={'_blank'} href="https://online-bazar-7f899.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
      </div>
      {/* onlinebazar........................................................................ */}




    </div>



    <div className='grid grid-cols-2 gap-3 mt-16 ml-20 mr-20'>

{/* Khudalagse........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2'>Khuda Lagse?</h1>
        <img className='projectimg' src={khudaimg1} alt="" />
        <label htmlFor="khudalagse-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
        <div>
        <input type="checkbox" id="khudalagse-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="khudalagse-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Khuda Lagse?</h3>
   <div>
   <Slider {...settings}>
          <div>
          <img className='modalimg' src={khudaimg1} alt="" />
          </div>
          <div>
          <img className='modalimg' src={khudaimg2} alt="" />
          </div>
          <div>
          <img className='modalimg' src={khudaimg3} alt="" />
          </div>
          <div>
          <img className='modalimg' src={khudaimg4} alt="" />
          </div>
          <div>
          <img className='modalimg' src={khudaimg5} alt="" />
          </div>
          <div>
          <img className='modalimg' src={khudaimg6} alt="" />
          </div>
          <div>
          <img className='modalimg' src={khudaimg7} alt="" />
          </div>
         
         
        </Slider>

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Khuda Lagse?</span> is a food delivary system website.it is made for people are easiy get food from home.they can choose their location and order from their favourite resturant.we placed theird order by our delivary men. by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
        <li className="step step-primary">It is Mern Stack website</li>
          <li className="step step-primary">People can choose their favourite resturant and food.</li>
         
          <li className="step step-primary">Specific user can see specific product and room which they buy and book room.</li>
          <li className="step step-primary">We ensure strong security system.</li>
          <li className="step step-primary">Easy Payment system</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">Admin can control make admin and see all user and delete user and delete item.</li>
        
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span>ReactJS, Tailwind, NodeJS, ExpressJS, MongoDB, Firebase, EmailJs.</h1>
   </div>
   <div>
   <a target={'_blank'} href="https://travelguru-23c1f.web.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
        
      </div>
{/* Khudalagse........................................................................ */}

      
      
      {/* furns........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2'>Furns</h1>
        <img className='projectimg' src={img4} alt="" />
        <label htmlFor="furns-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://furns-website.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 

        <div>
        <input type="checkbox" id="furns-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="furns-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Furns</h3>
   <div>
   <Slider {...settings}>
          <div>
          <img className='modalimg' src={furnsimg1} alt="" />
          </div>
          <div>
          <img className='modalimg' src={furnsimg2} alt="" />
          </div>
          <div>
          <img className='modalimg' src={furnsimg3} alt="" />
          </div>
          <div>
          <img className='modalimg' src={furnsimg4} alt="" />
          </div>
          <div>
          <img className='modalimg' src={furnsimg5} alt="" />
          </div>
          <div>
          <img className='modalimg' src={furnsimg6} alt="" />
          </div>
          
         
        </Slider>

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Furns</span> is a online shoping .it is made by react.it is only just fronend design. by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">This is a E-coomercial Website.</li>
          <li className="step step-primary">People can create an account and then enter the website.</li>
          <li className="step step-primary">Without login anyone can’t enter the service or product page.</li>
          <li className="step step-primary">User can see Product Details and add to cart if they want to buy..</li>
          <li className="step step-primary">User can delete and add more items to the cart page</li>
          <li className="step step-primary">People can send email to admin for help.</li>
          
        </ul>
         </p>

         <h1><span className='text-xl font-bold text-red-400'> Technology:</span> HTML, CSS, Bootstrap, ReactJs, React Router, Email Js, Firebase Authentication.</h1>
   </div>
   <div >
   <a target={'_blank'} href="https://furns-website.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
      </div>

      {/* furns........................................................................ */}

    </div>



    <div className='grid grid-cols-2 gap-3 mt-16 ml-20 mr-20'>


{/* hyde furniture........................................................................ */}
<div>
      <h1 className='text-2xl font-bold mb-2'>Hyde Furniture</h1>
        <img className='projectimg' src={img3} alt="" />
        <label htmlFor="hyde-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://hyde-furniture.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 

        <div>
        <input type="checkbox" id="hyde-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="hyde-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Hyde Furniture</h3>
   <div>
   <Slider {...settings}>
          <div>
          <img className='modalimg' src={img3} alt="" />
          </div>
          <div>
          <img className='modalimg' src={hydeimg1} alt="" />
          </div>
          <div>
          <img className='modalimg' src={hydeimg2} alt="" />
          </div>
          <div>
          <img className='modalimg' src={hydeimg3} alt="" />
          </div>
          <div>
          <img className='modalimg' src={hydeimg4} alt="" />
          </div>
          <div>
          <img className='modalimg' src={hydeimg5} alt="" />
          </div>
          <div>
          <img className='modalimg' src={hydeimg6} alt="" />
          </div>
          <div>
          <img className='modalimg' src={hydeimg7} alt="" />
          </div>
          
         
        </Slider>

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'><span className='text-orange-800 font-bold text-xl'>Hyde Furniture</span> is a online shoping .it is made by react.it is only just fronend design. by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">This is a E-coomercial Website</li>
          <li className="step step-primary">It is full Responsive.</li>
          <li className="step step-primary">People can create an account and then enter the website.</li>
          <li className="step step-primary">Without login anyone can’t enter the service or product page.</li>
          <li className="step step-primary">Easy login and register system with strong security.</li>
          <li className="step step-primary">User can see Product Details and add to cart if they want to buy..</li>
          <li className="step step-primary">User can delete and add more items to the cart page.</li>
          <li className="step step-primary">People can send email to admin for help.</li>
          
        </ul>
         </p>
         <h1><span className='text-xl font-bold text-red-400'> Technology:</span> HTML, CSS, Bootstrap, ReactJs, React Router, Email Js, Firebase Authentication.</h1>
   </div>
   <div >
   <a target={'_blank'} href="https://hyde-furniture.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
        
      </div>
{/* hyde furniture........................................................................ */}


      {/* carashop........................................................................ */}
      <div>
      <h1 className='text-2xl font-bold mb-2'>Cara Shop</h1>
        <img className='projectimg' src={img5} alt="" />

        <label htmlFor="cara-modal-5" className="btn btn-outline btn-accent mt-4">View Details</label>
        <a target={'_blank'} href="https://cara-shop-website.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 

        <div>
        <input type="checkbox" id="cara-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl  bg-black">
  <label htmlFor="cara-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-3xl mb-4 ">Cara Shop</h3>
   <div>
   <Slider {...settings}>
          <div>
          <img className='modalimg' src={caraimg1} alt="" />
          </div>
          <div>
          <img className='modalimg' src={caraimg2} alt="" />
          </div>
          <div>
          <img className='modalimg' src={caraimg3} alt="" />
          </div>
          <div>
          <img className='modalimg' src={caraimg4} alt="" />
          </div>
          <div>
          <img className='modalimg' src={caraimg5} alt="" />
          </div>
          
         
        </Slider>

        <h1 className='text-start font-bold text-xl mb-2 mt-4 text-red-400'>Description</h1>
        <p className='text-start font-bold'>Cara is a javascript website.it is just frontend design. by our website user can get some facilitate..that is.. 
        
        <br />
        <ul className="steps steps-vertical mt-6">
          <li className="step step-primary">This website made by javascript</li>
          <li className="step step-primary">There are many product and set their price people easily find their dress.</li>
          <li className="step step-primary">Single product page is help the details specifiq product details.</li>
          
        </ul>
         </p>
   </div>
   <h1><span className='text-xl font-bold text-red-400'> Technology:</span> HTML, CSS, Bootstrap, Javascript</h1>
   <div >
   <a target={'_blank'} href="https://cara-shop-website.netlify.app/"><button  className="btn btn-outline btn-accent mt-4 ml-4">Live Site</button></a> 
    </div>
  </div>
</div>
        </div>
        
      </div>

      {/* carashop........................................................................ */}


    </div>

      </div>
        

    </div>
  )
}

export default Portfolios;