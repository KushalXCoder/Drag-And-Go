import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <>
    <div className="container1 h-screen border-b-2 overflow-x-hidden">
      <nav className='w-full px-8 py-8'>
        <h1 className='text-3xl'>Drag And Go</h1>
      </nav>
      <div className="content h-full w-full justify-items-center content-center relative">
        <div className="headings absolute top-32">
          <h1 className='text-6xl'>Ease your <span className='text-red-600'> TRAVELLING</span></h1>
          <h2 className='text-6xl mt-2 text-center'>using Drag & Drops .</h2>
        </div>
        <div className="button-container w-full flex justify-center">
          <button className='w-1/6 px-5 py-3 text-white bg-blue-500 mt-12 rounded-md shadow-[10px_10px_0px_0px_rgba(200,200,200,0.4)]'>Get Started</button>
        </div>
      </div>
    </div>
    {/* <div className="container2 h-screen w-screen">

    </div> */}
    </>
  )
}

export default Home