import React from "react";
import bikeimage from '../assets/bikeimage.png';
import indianmap from '../assets/indianmap.png'
import redlocation from '../assets/redlocation.png'


function Service(){
    return(
        <div id="services" className="py-[16px] bg-[#00A8E880] px-[16px] lg:py-[80px] lg:px-[40px] scroll-mt-[60px] lg:scroll-mt-[100px]">
 <div className="text-[24px] text-[#000000] font-inter text-center lg:text-[34px]">Our Service</div>
 <div className="flex flex-col lg:flex-row lg:gap-[48px] lg:items-center">
 <img src={bikeimage} alt="" className="w-[250px] h-[220px] mx-auto lg:w-[525px] lg:h-[466px]"/>
<div className="flex flex-col">
<div className="text-[16px] text-[#000000] font-interitalic lg:text-[26px]  " > we ensure timely and reliable delivery of our high-quality products directly to your company’s doorstep. Our logistics network is designed to serve businesses efficiently across multiple regions.</div>

<section className="flex flex-col gap-[8px] items-center mt-[20px]">
   
<img src={indianmap} alt=""  className="h-[250px] w-[250px]"/>
<section className="flex items-center gap-[6px]">
<img src={redlocation}alt="" className="h-[28px] w-[28px]"/>
<div className="text-[22px] text-[#000000] font-inter font-bold "> PAN INDIA DELIVERY</div>
</section>
</section>
</div>
 </div>
</div>
      
    );
}
export default Service;