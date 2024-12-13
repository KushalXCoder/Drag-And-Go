import {React, useRef, useEffect} from 'react';
import '../Styles/Home.css';
import { motion, useAnimation, useInView } from "framer-motion";
import Travel from "../Other/Travel.mp4";

const Home = () => {

  // Animation Code

  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1.3 });
    } else {
      controls.start({ scale: 1 });
    }
  }, [isInView, controls]);

  // Other code

  return (
    <>
    {/* Navbar */}
    <nav className='w-full px-8 py-8 bg-black'>
      <motion.h1 className='text-3xl'
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0, transition: {duration: 1}}}
      >Drag And Go</motion.h1>
    </nav>
    {/* Container 1 */}
    <div className="container1 h-screen">
      {/* <video controls autoPlay muted className='absolute h-screen w-screen'>
        <source src={video}/>
      </video> */}
      <div className="content h-full w-full justify-items-center content-center relative">
        <motion.div className="headings absolute top-32"
        initial={{opacity: 0, y: -50}}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 }
        }}
        >
          <h1 className='text-6xl'>Ease your <span className='text-red-600'> TRAVELLING</span></h1>
          <h2 className='text-6xl mt-2 text-center'>using Drag & Drops .</h2>
        </motion.div>
        <div className="button-container w-full flex justify-center">
          <button className='w-1/6 px-5 py-3 text-white bg-blue-500 mt-12 rounded-md shadow-[10px_10px_0px_0px_rgba(200,200,200,0.4)]'>Get Started</button>
        </div>
      </div>
    </div>
    {/* Container 2 */}
    <div className="container2 h-screen w-screen p-5 relative">
      <motion.div
        ref={videoRef}
        className="image-container h-5/6 w-4/6 border border-white absolute shadow-[0px_0px_0px_10px_rgba(255,255,255,1)] rounded-md"
        animate={controls}
        initial={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <video autoPlay muted className="w-full h-full">
          <source src={Travel} />
        </video>
      </motion.div>
    </div>
    </>
  )
}

export default Home