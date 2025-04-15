import React from "react";
import aralidte from '../assets/aralidte.png';
import lpmetalrings from '../assets/lp-metals.png';
import aspestasrings from '../assets/aspetarering.png';
import weldingrods from '../assets/weldingrings.png';
import grindingwheel from '../assets/grindingwheel.png';
import safetyitems from '../assets/safety.png';
import copperrings from '../assets/copperrings.png';
import hpmetalrings from '../assets/hpmetalring.png';
import brazingrings from '../assets/brazingring.png';
import stretchfilm from '../assets/stretchflim.png';
import developerspray from '../assets/developerspray.png';
import amarbrush from '../assets/amarbrush.png';
const lists =[
    {id:1,name:"Araldite AV 138",src:aralidte},
    { id:2,name:"HP metal cups",src: lpmetalrings},
    {  id:3,name:"Aspestas ring",src:aspestasrings},
    {id:4,name:"Welding rods",src: weldingrods},
    { id:5,name:"Grinding wheel",src:grindingwheel},
    { id:6,name:"Safety Items",src:safetyitems},
    { id:7,name:"Copper Rings",src:copperrings},
    { id:8,name:"Lp metal cups",src:hpmetalrings},
    { id:9,name:"Brazing rings",src:brazingrings},
    { id:10,name:"Stretch flim",src:stretchfilm},
    { id:11,name:"Developer spray",src:developerspray},
    { id:12,name:"Amar Brush",src:amarbrush},
]


function Product(){
    return (
        <div id="products" className="flex flex-col py-[16px] lg:py-[80px] bg-[#001F3F] scroll-mt-[60px] lg:scroll-mt-[100px]">
             <div className="text-[24px] text-[#FFFFFF] font-inter lg:text-[34px] text-center pb-[10px] lg:pb-[24px]">Our Products</div>
             <div className="text-[18px] lg:text-[22px] text-[#FFFFFF] font-interItalic text-center pb-[30px] lg:pb-[60px]">"Excellence in Every Product We Offer"</div>
             <section  className="flex  gap-[24px] flex-wrap justify-center px-[30px] gap-y-[20px] lg:px-[60px] lg:gap-y-[80px]">
             {
                lists.map((list)=>(
<div className="flex flex-col justify-center items-center gap-[12px] w-[46%] lg:w-[25%]  lg:gap-[32px]" >
<div className="text-[16px] lg:text-[24px] text-[#FFFFFF] font-interItalic text-center">{list.name}</div>
<img src={list.src} alt="image"  className="h-[150px] w-[150px] lg:w-[250px] lg:h-[250px]"/>

</div>


                )

                )
             }
             </section>


        </div>
    );
}
export default Product;