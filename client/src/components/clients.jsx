import React from "react";
import sp from '../assets/sp.png';
import rr from '../assets/rr.png';
import tvs from '../assets/tvs.png';
import uf from '../assets/uf.png';
import hyma from '../assets/hyma.png';
import chemtech from '../assets/chemtech.png';
import arual from '../assets/arulrubbers.png';
const clients = [arual,chemtech,tvs,uf,hyma,sp,rr]

function Clients(){
    return(
<div id="clients" className="py-[16px] bg-[#F5F5F5] px-[12px] scroll-mt-[60px] lg:scroll-mt-[100px] lg:py-[80px] lg:px-[50px]">
<div className="text-[24px] text-[#000000] font-inter text-center lg:text-[36px]">Our Clients</div>
<div className="text-[16px] text-[#000000] font-interLight text-center italic lg:text-[32px] lg:py-[29px]">"Delivering Excellence, Trusted by the Best."</div>
<div className="flex flex-wrap gap-[30px] lg:gap-[70px] justify-center pt-[40px] ">
{
    clients.map((client,index)=>(
        <img src={client}  alt="image"   className="w-[45%] h-[100px] lg:w-[25%] lg:h-[250px]" />
    )

    )
}
</div>

</div>
    )
}
export default Clients;