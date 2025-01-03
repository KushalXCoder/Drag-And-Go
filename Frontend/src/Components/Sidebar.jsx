import React, { useState } from 'react';
import "../Styles/Sidebar.css";
import Sample from "../Other/Instagram.png";

const Sidebar = () => {

  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <>
        <ul className='sidebar-list flex flex-col gap-5 w-full h-2/5 justify-center items-center'>
            {["Dashboard", "Profile", "Flights", "AI Itinerary"].map((item,index) => (
                <li 
                key={index} 
                className={`sidebar-list-items text-white w-3/4 border border-white text-center py-2 rounded-md cursor-pointer transition-all duration-300 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.5)] hover:hover:bg-blue-400 hover:border-blue-500 hover:font-semibold hover:scale-95
                ${activeItem === item ? 'border-transparent bg-blue-600' : ''}`}
                onClick={() => setActiveItem(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
        <div className="bottom-items w-full h-2/5 flex flex-col justify-end items-center px-5">
            <div className="profile-container w-5/6 h-2/6 border border-white mb-5 flex items-center px-3 rounded-md">
                <img src={Sample} alt="" className='h-[60px] me-4 p-1'/>
                <div className="profile-details overflow-x-scroll">
                    <p className='username'>Loading...</p>
                    <p className='email'>kushalrathod123@gmail.com</p>
                </div>
            </div>
            <div className="line bg-white w-full h-[2px] mb-3"></div>
            <button className='border border-white text-white px-4 py-2 w-5/6 mt-2 rounded-md transition-all duration-200 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.5)] hover:bg-red-600 hover:font-semibold hover:scale-95'>Logout</button>
        </div>
    </>
  )
}

export default Sidebar