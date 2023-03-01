import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0upac7', 'template_3v6hllz', form.current, 'oYs0fZ-tmSmHuYr2P')
      .then((result) => {
          console.log(result.text);
          console.log("massage sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className=''>
      <div >
      <h1 className='text-6xl font-bold p-10'> <span className='textabout'>Contact</span> </h1>

      <div className='grid grid-cols-4 gap-3 mt-16 ml-20 ml-60'>

        <div className="col-span-2 box1">
          <h1 className='text-4xl font-bold mb-8'>Get In Touch</h1>

          <form ref={form} onSubmit={sendEmail}>
                  
          <div className='flex'>
          <div className="form-control w-full max-w-xs ml-8">
  <label className="label">
    <span className="label-text text-gray-50 font-bold ">Name</span>
  </label>
  <input type="text" placeholder="Type here" name="user_name" className="input input-bordered w-full max-w-xs text-black font-bold" />
</div>


<div className="form-control w-full max-w-xs ml-8 mr-8">
  <label className="label">
    <span className="label-text text-gray-50 font-bold">Subject</span>
  </label>
  <input type="text" placeholder="Type here" name="user_name" className="input input-bordered w-full max-w-xs text-black font-bold" />
</div>
          </div>

                     



<div className="form-control w-full max-w-xs ml-28 ">
  <label className="label">
    <span className="label-text text-gray-50 font-bold">Email</span>
  </label>
  <input  placeholder="Type here" type="email" name="user_email" className="input input-bordered w-full max-w-xs text-black font-bold" />
</div>


<div className="form-control  w-full max-w-xs ml-28">
  <label className="label">
    <span className="label-text text-gray-50 font-bold">Message</span>
    
  </label>
  <textarea name="message" className="textarea textarea-bordered h-24 text-black font-bold" placeholder="Bio"></textarea>
  
</div>

                    <button type="submit" className="btn btn-outline btn-accent mt-8">Send</button>
                   
                    
                   
    </form>
        </div>

        <div className='box2'>
        <h1 className='text-4xl font-bold mb-9'>Contact Info</h1>

                         <h6 className='infostyle'><b>Phone: <br /> </b>  +8801314540002</h6>
                        <br />
                        <h6 className='infostyle'><b>Email:</b> <br /> rashedul1784islam@gmail.com</h6>
                        <br />
                        <h6 ><b> Address:</b> kewatkhali,moynermor,mymensingh</h6>
                        <br />
                        <h6 className='infostyle'><b>Linkdin:</b> <br /> <a href="https://www.linkedin.com/in/rashed-islam-/"><span className='text-blue-600'>Rashedul islam</span></a></h6>
        </div>

        <div>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Contact;