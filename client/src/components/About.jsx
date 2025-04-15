import React from "react";

function About(){
    return(
        <div id="about" className="flex flex-col justify-center py-[16px] bg-[#EAEAEA] px-[20px] lg:py-[80px] lg:px-[200px] scroll-mt-[60px] lg:scroll-mt-[100px]">
          <div className="text-[24px] text-[#000000] font-inter text-center lg:text-[34px]">About Us</div>
          <section className="flex flex-col gap-[10px] lg:gap-[16px] pt-[12px]">
          <div className="text-[16px] lg:text-[22px] text-[#000000] font-interLight text-center">Founded on October 6, 2017, Senthilmurugan Traders has emerged as a trusted name in the hardware and industrial supply sector. With a relentless focus on quality, innovation, and customer satisfaction, we have built a reputation for delivering top-notch products that meet the diverse needs of industries.
          </div>
          <div className="text-[16px] lg:text-[22px] text-[#000000] font-inter font-bold  text-center">Consistent Growth with Proven Expertise</div>
          <div className="text-[16px]  lg:text-[22px] text-[#000000] font-interLight text-center">Over the years, our unwavering commitment to excellence has resulted in a remarkable annual turnover of ₹1.5 to ₹2 crore, reflecting the trust and confidence our clients place in us.
          </div>
          <div className="text-[16px]  lg:text-[22px] text-[#000000] font-inter font-bold text-center">Our Mission</div>
          <div className="text-[16px]  lg:text-[22px]  text-[#000000] font-interLight text-center">To provide exceptional hardware solutions that empower industries by enuring safety, efficiency, and durability.
          </div>
          <div className="text-[16px]  lg:text-[22px] text-[#000000] font-inter font-bold text-center"> GST NO: 33CRAPS8237A1ZO</div>
          </section>

        </div>
    );
}
export default About;