import React from 'react';
import Navbar from './Navbar';
import "../Styles/DragPage.css";
import Box from './Box';
import { createSwapy } from 'swapy';

const DragPage = () => {
    
  return (
    <>
        <Navbar/> 
        <div className="drag-content-container w-screen bg-black relative mt-[100px] flex">
            <div className="drag-container-left h-full w-3/4 border"></div>
            <div className="drag-container-right h-full w-1/4 border flex flex-col gap-10 overflow-y-scroll items-center">
                <Box/>
            </div>
        </div>
    </>
  )
}

export default DragPage