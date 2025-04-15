import React from "react";
import mail from '../assets/mail.png';
import call from '../assets/call.png';
import whiteplace from '../assets/whiteplace.png';
import whatsapp from '../assets/whatsapp.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
const socialmedia =[whatsapp,twitter,facebook];
function Footer(){
    return (
        <div id="footer" className="py-[16px] bg-[#090C63] flex flex-col lg:flex-row  px-[20px] lg:py-[80px] lg:px-[98px] lg:justify-between justify-center ">
<section className="flex flex-col">
<div className="text-[18px] lg:text-[32px] font-inter text-[#FFFFFF]">SENTHILMURUGAN TRADERS</div>
<div className="flex  items-center pt-[8px] lg:text-[24px]"><img src={mail} alt=""  className="h-[16px] w-[16px] lg:w-[32px] lg:h-[32px]  pr-[4px] lg:pr-[10px]"/><span className="text-[14px] font-interItalic text-[#FFFFFF] lg:text-[24px]">senthilmurugantraders123@gmail.com</span></div>
<div className="flex  items-center  pt-[8px] lg:text-[24px]"><img src={call} alt=""  className="h-[16px] w-[16px] pr-[4px] lg:w-[32px] lg:h-[32px] lg:pr-[10px] "/><span className="text-[14px] font-interItalic text-[#FFFFFF] lg:text-[24px]"> +91 904 376 4342</span></div>
<div className="flex  pt-[8px] lg:text-[24px] lg:w-[400px]"><img src={whiteplace} alt=""  className="h-[16px] w-[16px] lg:w-[32px] lg:h-[32px] lg:pr-[10px] pr-[4px]"/><span className="text-[14px] font-interItalic text-[#FFFFFF]  lg:text-[24px]"> Senthilmurugan Traders,
Sf.No.117/1, NTR Nagar,Mookandapalli, Hosur,Krishnagiri(DT), Tamil Nadu, PIN: 635126.</span></div>
</section>

<section className="gap-[8px] py-[20px] flex flex-col ">
    <div  className="text-[18px] font-inter text-[#FFFFFF] lg:text-[30px]">Category</div>
    <a href="#home" className="text-[14px] font-interLight text-[#FFFFFF] lg:text-[24px]">Home</a>
    <a href="#about" className="text-[14px] font-interLight text-[#FFFFFF] lg:text-[24px]">About</a>
    <a href="#products"className="text-[14px] font-interLight text-[#FFFFFF] lg:text-[24px]">Products</a>
    <a href="#services" className="text-[14px] font-interLight text-[#FFFFFF] lg:text-[24px]">Services</a>
    <a href="#contact" className="text-[14px] font-interLight text-[#FFFFFF] lg:text-[24px]">Contact Us</a>
    <a href="#clients" className="text-[14px] font-interLight text-[#FFFFFF] lg:text-[24px]">Clients</a>
    <a href="#footer" className="text-[14px] font-interLight text-[#FFFFFF] lg:text-[24px]">Footer</a>
</section>
<section className="flex gap-[20px] lg:gap-[30px] lg:flex-col">
{
    socialmedia.map((social,index)=>(
        <img src={social} alt=""  className="w-[40px] h-[40px] lg:h-[72px] lg:w-[72px]"/>
    )

    )
}
</section>


        </div>
    )
}
export default Footer;