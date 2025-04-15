import React from "react";
import heroimage from '../assets/heroimage.png'
function Hero(){
    return(
        <div id="home" className="flex flex-col py-[16px] bg-[#001F3F] lg:flex-row lg:py-[80px] scroll-mt-[60px] lg:items-center lg:scroll-mt-[120px]">
           <div className="hidden lg:block lg:py-[22px] lg:px-[32px] lg:ml-[100px]  ">
          <div className="font-inter  text-[#FFFFFF] text-[48px]">"One-Stop Solutions For Industrial Essentials"</div> 
          <div className="font-inter py-[24px] text-[#FFFFFF] text-[18px]">Providing High Quality safety Items,Brazing rings,Copper  rings and More.....</div> 
          <a href="#products" className="w-auto font-inter px-[12px] py-[8px] bg-[#FFC107] text-[#000000] text-[20px] rounded-[12px]">Explore More</a>
          </div>
          <img src={heroimage} alt=""  className="w-full h-[206px] lg:h-[325px] lg:w-[43%]" />  
          <div className="py-[22px] px-[32px] lg:hidden ">
          <div className="font-inter  text-[#FFFFFF] text-[28px]">"One-Stop Solutions For Industrial Essentials"</div> 
          <div className="font-inter py-[24px] text-[#FFFFFF] text-[18px]">Providing High Quality safety Items,Brazing rings,Copper  rings and More.....</div> 
          <a href="#products" className="w-auto font-inter px-[12px] py-[8px] bg-[#FFC107] text-[#000000] text-[16px] rounded-[12px]">Explore More</a>
          </div>
        </div>
    );
}
export default Hero;