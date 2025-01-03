import React from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Flight from "../Other/Flight.jpg";
import "../Styles/Dashboard.css";
import Itinerary from "../Other/Itinerary.jpg";

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='dashboard-container bg-black h-screen w-screen pt-[100px] flex'>
        <div className="sidebar h-full w-1/6 text-white border border-white flex flex-col justify-between pt-10 pb-5 rounded-r-md">
            <Sidebar/>
        </div>
        <div className="content-container h-full w-5/6 flex p-10">
            <div className="flight-box h-full w-2/4 border border-white me-10 rounded-md">
                <img src={Flight} alt="" className='h-2/4 w-full rounded-t-md'/>
                <div className="flight-box-content w-full p-5">
                    <h1 className='text-orange-500 text-2xl font-bold'>Book Flights</h1>
                    <p className='text-white mt-5'>Discover the ultimate convenience in flight booking with our advanced price comparison tool. Compare fares from hundreds of airlines, view real-time availability, and secure the best deals tailored to your preferences. Enjoy transparent pricing, flexible options, and exclusive discounts, all in one place. Your perfect flight is just a few clicks away!</p>
                    <button className='text-white px-4 py-2 w-2/5 border mt-9 rounded-md shadow-[5px_5px_0px_0px_rgba(255,255,255,0.6)] hover:bg-blue-500 hover:scale-95 hover:font-semibold transition-all duration-200]'>Book Flights</button>
                </div>
            </div>
            <div className="ai-itinary-box h-full w-2/4 border border-white rounded-md">
                <img src={Itinerary} alt="" className='h-2/4 w-full rounded-t-md'/>
                <div className="ai-itianry-box-content w-full p-5">
                    <h1 className='text-orange-500 text-2xl font-bold'>AI Itinerary</h1>
                    <p className='text-white mt-4'>Plan your perfect trip with our AI-powered itinerary generator. Simply share your preferences, and our intelligent system will craft a personalized travel plan, including top attractions, dining options, and hidden gems. Whether it’s a weekend getaway or a multi-city adventure, our AI ensures optimal scheduling, seamless coordination, and maximum enjoyment. Save time, reduce stress, and experience travel like never before with tailored recommendations designed just for you!</p>
                    <button className='text-white px-4 py-2 w-2/5 border mt-5 rounded-md shadow-[5px_5px_0px_0px_rgba(255,255,255,0.6)] hover:bg-blue-500 hover:scale-95 hover:font-semibold transition-all duration-200]'>Generate Trip</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard