import {React, useRef, useEffect} from 'react';
import '../Styles/Home.css';
import { motion, useAnimation, useInView } from "framer-motion";
// import Travel from "../Other/Travel.mp4";
import Photo from "../Other/DragAndDrop.png";
import Flight from "../Other/Flight.jpg";
import AI from "../Other/AI.webp";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

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

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
    console.log("Navigated");
  }

  const handleRedirect = () => {
    navigate('/select-page');
  }

  // Other code

  return (
    <>
      {/* Navbar */}
      <Navbar/>
      {/* Container 1 */}
      <div className="container1 h-screen bg-white dark:bg-black">
        <div className="content h-full w-full justify-items-center content-center relative">
          <motion.div className="headings absolute top-32 text-orange-400 dark:text-zinc-200"
          initial={{opacity: 0, y: -50}}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
          }}
          >
            <h1 className='text-6xl'>Plan your <span> TRAVELLING</span></h1>
            <h2 className='text-6xl mt-2 text-center'>using Drag & Drops .</h2>
          </motion.div>
          <div className="button-container w-full flex justify-center">
            <button className='w-1/6 px-5 py-3 text-white bg-blue-500 mt-12 rounded-md shadow-[10px_10px_0px_0px_rgba(200,200,200,0.4)]' onClick={handleClick}>Get Started</button>
          </div>
        </div>
      </div>
      {/* Container 2 */}
      <div className="container2 h-screen w-screen p-5 relative bg-white dark:bg-black">
        <motion.div
          ref={videoRef}
          className="image-container h-5/6 w-4/6 border border-black dark:border-white absolute shadow-[0px_0px_0px_10px_rgba(0,0,0,1)] dark:shadow-[0px_0px_0px_10px_rgba(255,255,255,1)] rounded-md"
          animate={controls}
          initial={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <video autoPlay muted loop className="w-full h-full">
            {/* <source src={Travel} /> */}
          </video>
        </motion.div>
        <motion.h1 className='offer text-orange-400 dark:text-white absolute bottom-28 text-5xl'
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition:{duration: 2}}}
        >What we offer ?</motion.h1>
      </div>
      <div className="container3 w-screen bg-white dark:bg-black">
        <motion.div className="box1 h-1/4 w-full flex mb-16"
        initial={{x: 100}}
        whileInView={{x: 0, transition: {duration: 1}}}
        viewport={{amount: "50%"}}
        >
          <div className="image-containers h-full w-2/5 p-5">
            <img src={Photo} alt=""/>
          </div>
          <div className="content-box border border-black dark:border-white h-full w-3/5 px-12 py-8">
            <h1 className='features text-black dark:text-white text-3xl font-bold text-center'>Drag & Drop Plans</h1>
            <p className='features-text text-black dark:text-white text-lg mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci quisquam provident voluptatibus doloremque reprehenderit velit. In inventore est atque dolorem, quaerat nam eaque quos quidem nisi ut odit quasi necessitatibus tenetur quia magni velit accusamus itaque labore illum dicta consectetur? Labore deleniti, quae nemo accusantium voluptates ipsa officiis sapiente explicabo debitis placeat dolorem vitae velit quia animi sit ea, reiciendis doloribus et sed delectus. Itaque perspiciatis deleniti dicta repellat nulla atque eius quod voluptate neque placeat blanditiis quidem minima repudiandae reprehenderit in tempore sed corrupti delectus, autem nam error! Voluptatem aliquam dolorem molestias in quod velit, deleniti praesentium atque!</p>
          </div>
        </motion.div>
        <motion.div className="box2 h-1/4 w-full flex mb-16"
        initial={{x: -100}}
        whileInView={{x: 0, transition: {duration: 1}}}
        viewport={{amount: "50%"}}
        >
          <div className="content-box border border-black dark:border-white h-full w-3/5 px-12 py-8">
            <h1 className='features text-black dark:text-white text-3xl font-bold text-center'>Flight Assistance</h1>
            <p className='features-text text-black dark:text-white text-lg mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime animi illum provident in cumque incidunt perferendis totam, officiis sapiente? Maxime, ab repellendus dolorem obcaecati rerum, quidem hic minima, inventore dicta esse accusantium eius eos rem vel tenetur reiciendis blanditiis consequuntur. Quia incidunt nihil iusto modi omnis quasi ratione in iste ullam, perferendis suscipit odit sed blanditiis mollitia? In fugit illo aspernatur quod officiis corporis sunt cum, quaerat aperiam excepturi iure esse et necessitatibus ex natus harum, a quam ipsum porro praesentium quas, quidem nostrum maiores! Velit, mollitia. Vero officiis est laborum vel omnis, nesciunt iure. Dignissimos praesentium voluptatem libero.</p>
          </div>
          <div className="image-containers h-full w-2/5 p-10">
            <img src={Flight} alt="" className='rounded'/>
          </div>
        </motion.div>
        <motion.div className="box3 h-1/4 w-full flex"
        initial={{x: 100}}
        whileInView={{x: 0, transition: {duration: 1}}}
        viewport={{amount: "50%"}}
        > 
          <div className="image-containers h-full w-2/5 p-8">
            <img src={AI} alt="" className='rounded'/>
          </div>
          <div className="content-box border border-black dark:border-white h-full w-3/5 px-10 py-8">
            <h1 className='features text-black dark:text-white text-3xl font-bold text-center'>AI Itenary</h1>
            <p className='features-text text-black dark:text-white text-lg mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magni beatae blanditiis officia rem nisi quaerat quidem cupiditate iste. Cum consequuntur eius ad perferendis cumque exercitationem ratione, unde aspernatur voluptatum similique nam nihil? Repellendus incidunt, recusandae laudantium dolores facilis numquam facere odio illum minima animi ratione. Sint ipsa, officiis rerum ipsum tenetur sit minus, et laboriosam necessitatibus deserunt quibusdam voluptates corrupti dolore quos ex sapiente obcaecati totam vero aspernatur ea fuga vel. Laboriosam eos modi, vel ipsam, pariatur dolorem voluptatum iusto in rem incidunt dolore odit, a ea! Corporis fugit reprehenderit cupiditate quia laboriosam distinctio nesciunt illo dicta voluptatem doloribus?</p>
          </div>
        </motion.div>
        <motion.div className='w-full text-white text-3xl'
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 2}}}
        >
          <h1 className='more text-center mt-24 text-orange-400 dark:text-white'>AND MORE ...</h1>
        </motion.div>
        <button className="temporary text-white bg-blue-600 px-4 py-2 rounded-md" onClick={handleRedirect}>Redirect</button>
      </div>
    </>
  )
}

export default Home