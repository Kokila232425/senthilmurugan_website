import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import placeicon from '../assets/place.png';
import rectangle from '../assets/rectangle.png';
import rectanglevertical from '../assets/rectanglevertical.png';
function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
            publicKey:process.env.PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
               form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <div id="contact" className="py-[16px] bg-[#FFCD02] px-[30px] lg:py-[80px] lg:px-[64px] flex flex-col justify-center items-center scroll-mt-[60px] lg:scroll-mt-[100px]">
 <div className="text-[24px] text-[#000000] font-Inter lg:text-[34px] text-center">Contact Us</div>
 <div className="text-[16px] text-[#000000] font-InterLight lg:text-[24px] lg:py-[18px] text-center italic">We are always here to assist you! Reach out for orders, inquiries, and more.</div>
<section className="flex flex-col lg:flex-row lg:w-[65%]">
<section>
 <div className="text-[16px] text-[#000000] font-Inter text-center font-medium pt-[20px] lg:text-[32px] lg:pt-[30px]">Contact Information:</div>
 <div className="text-[16px] text-[#000000] font-Inter text-center italic lg:text-[22px] pb-[2px]">For all orders and inquiries, please email us directly.</div>
 <div className="text-[16px] text-[#090C63] lg:text-[22px] font-Inter text-center font-medium pb-[12px]">Email: senthilmurugantraders123@gmail.com</div>
 <div className="text-[16px] text-[#000000] font-Inter lg:text-[22px] text-center italic pb-[2px]">Need assistance or have a question? Feel free to give us a call.</div>
 <div className="text-[16px] text-[#090C63] font-Inter lg:text-[22px] text-center font-medium pb-[12px]">Phone: +91 904 376 4342</div>
 <div className="text-[16px] text-[#000000] font-Inter lg:text-[22px] text-center italic pb-[2px]">Visit us at our location or send physical mail to the address below.</div>
 <div className="text-[16px] text-[#090C63] font-Inter lg:text-[22px]  font-medium">Address:</div>
 <div className="flex ">
<img src={placeicon} alt=""  className="w-[32px] h-[32px] lg:w-[24px] lg:h-[30px]"/>
<div className="text-[16px] text-[#090C63] font-Inter lg:text-[22px] font-medium">Senthilmurugan Traders,
Sf.No.117/1, NTR Nagar,Mookandapalli, Hosur,Krishnagiri(DT), Tamil Nadu, PIN: 635126.</div>
 </div>
 </section>

<img src={rectangle} alt=""   className="py-[16px] lg:hidden"/>
<img src={rectanglevertical} alt=""  className="hidden lg:block lg:h-[691px] lg:px-[50px] lg:pt-[30px]"/>

<form className="flex flex-col lg:gap-[8px] w-full lg:pt-[30px]" ref={form} onSubmit={sendEmail}>
<div className="text-[16px] text-[#090C63] font-Inter lg:text-[22px]">Name:</div>
<input name="Name" type="text" className="lg:text-[22px] w-full max-w-[700px] py-[6px] px-[12px] rounded-[8px] lg:px-[10px] lg:py-[2px]" placeholder="Name" />
<div className="w-full max-w-[700px] text-[16px] text-[#090C63] font-Inter lg:text-[22px]">Phone Number:</div>
<input name="Phone Number" type="text" className="lg:text-[22px] py-[6px] px-[12px]  rounded-[8px] lg:px-[10px]lg:py-[2px]" placeholder="Phone Number" />
<div className="w-full max-w-[700px] text-[16px] text-[#090C63] font-Inter lg:text-[22px]">Email:</div>
<input name="Email" type="text" className="lg:text-[22px] py-[6px] px-[12px]  rounded-[8px] lg:px-[10px] lg:py-[2px]" placeholder="Email" />
<div className="w-full max-w-[700px] text-[16px] text-[#090C63] font-Inter lg:text-[22px] ">Message:</div>
<textarea name="Message" placeholder="Message" id="" className="h-[150px] p-[10px] rounded-[12px] lg:px-[10px] lg:py-[2px] lg:text-[22px]"></textarea>
<div className="flex justify-center items-center lg:py-[10px] lg:px-[10px] "><input className="w-[80px] font- mt-[12px] px-[12px] py-[8px] text-[#FFffff] bg-[#000000] text-[16px] rounded-[12px] text-center lg:text-[24px] lg:py-[10px] lg:w-[40%]" type="submit" value="send"/></div>
</form>
</section>



        </div>
    )
}
export default Contact;