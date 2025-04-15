import React,{useState} from "react";
import logo from '../assets/logo.png'
import triplebar from '../assets/triplebar.png'
import Modal from '../components/modal.jsx'
const homepage = [
    {id:'home',name:'Home'},
    {id:'about',name:'About'},
    {id:'products',name:'Products'},
    {id:'services',name:'Services'},
    {id:'contact',name:'Contact'},
    {id:'clients',name:'Clients'},
]
function Navbar (){
    const [active,setActive]=useState(null);
    const [showModal,setshowModal]=useState(false);
    const handleclick =(id)=>{
setActive(id);
    }
    return (
<div className="sticky top-0 flex justify-between justify-center items-center w-full py-[8px] px-[12px] lg:py-[28px] lg:px-[77px] bg-[#FFC107]">
<a href="#home"><img src={logo} className="h-[50px] w-[120px] lg:w-[150px] lg:h-[60px]"/></a>
<img src={triplebar} className="h-[30px] w-[30px] lg:hidden"  onClick={() => setshowModal(true)}/>
<Modal
        isOpen={showModal}
        onClose={() => setshowModal(false)}
       
      />
     <section className="hidden lg:block lg:flex gap-[28px]">
        {
            homepage.map((home,index)=>(
                <a key={home.id} onClick={() => handleclick(home.id)} href={`#${home.id}`} className={`py-[6px] text-[24px] text-[#090C63] ${active===home.id?" border-b-[3px] border-[#FFFFFF] ":""}`}>{home.name}</a>
            )

            )
        }
     </section>
     <a href="#contact" className="hidden lg:block py-[10px] px-[20px] text-[#FFFFFF] text-[24px] rounded-[12px] text-center bg-[#090C63]">Enquiry</a>

</div>
    );
}
export default Navbar;