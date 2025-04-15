import React, { useState } from "react";
import close from '../assets/close.png';

function Modal({ isOpen, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);

  if (!isOpen) return null;

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact Us" },
    { id: "clients", label: "Clients" },
    { id: "footer", label: "Footer" },
  ];

  const handleClick = (id) => {
    setSelectedItem(id);
   

  };

  return (
    <div className="flex flex-col fixed inset-0 bg-[#FFCD02] py-[20px] px-[20px] gap-[8px] z-50">
      <img
        src={close}
        className="w-[28px] h-[28px] ml-auto cursor-pointer"
        onClick={onClose}
        alt="close"
      />
      <div className="h-[12px]" />

      {menuItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => {handleClick(item.id);
             onClose(); }}
          className={`rounded-[8px] p-[8px] bg-[#FFFFFF] cursor-pointer transition-all duration-200 ${
            selectedItem === item.id ? "border-[2px] border-black" : ""
          }`}
        >
          <div className="text-[14px] font-inter text-[#000000]">{item.label}</div>
        </a>
      ))}
    </div>
  );
}

export default Modal;
