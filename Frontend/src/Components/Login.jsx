import React from 'react';
import Background from "../Other/Background.jpeg";
import "../Styles/Login.css";
import { useForm } from "react-hook-form";
import Email from "../Other/email.gif";
import Password from "../Other/password.gif";
import Instagram from "../Other/instagram.png";
import Snapchat from "../Other/social.png";
import X from "../Other/x.png";
import Whatsapp from "../Other/whatsapp.png";

const Login = () => {

    const {register,handleSubmit, formState: { errors }} = useForm();
    
    const handleClick = () => {

    }

    return (
        <>
            <div className="container1 h-screen w-screen bg-black justify-items-center content-center relative overflow-hidden">
                <img src={Background} alt="" className='absolute top-0'/>
                <div className="login-form h-4/5 w-4/5 rounded-md flex justify-center">
                    {/* <div className="content-container h-full w-2/4 px-10 py-12 border-2 border-r-0 rounded-md">
                        <div className="quote text-center text-3xl">
                            <h1>TRAVEL IS THE ONLY THING</h1>
                            <h1>YOU BUY THAT MAKES YOU</h1>
                            <h1 className='richer font-bold mt-2'>RICHER !</h1>
                        </div>
                        <div className="follow-us"></div>
                    </div> */}
                    <div className="form-container h-full w-2/5 border border-white p-5">
                        <h1 className='welcome text-center text-3xl'>Welcome !</h1>
                        <form className="max-w-sm mx-auto mt-10">
                            <div className="mb-5 flex items-center">
                                <label htmlFor="email" className='inline-block mr-2'>
                                    <img src={Email} alt="email photo" className='h-10'/>
                                </label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Email" required />
                            </div>
                            <div className="mb-5 flex">
                                <label htmlFor="password" className='inline-block mr-2'>
                                    <img src={Password} alt="email photo" className='h-10'/>
                                </label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Password" required />
                            </div>
                            <div className="submit-container w-full flex justify-center">
                                <button type="submit" className="submit-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 px-5 py-2.5 mt-5 shadow-[10px_10px_0_0_rgba(0,0,0,0.8)]" onClick={handleClick}>Submit</button>
                            </div>
                            <hr className='mt-10'/>
                            <div className="other-options">
                                <h3 className='text-center mt-5 text-lg text-blue-900 font-bold'>Continue with : </h3>
                                <div className="buttons w-full mt-5 flex justify-around">
                                    <button className='w-2/5 bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md shadow-[5px_6px_0_0_rgba(0,0,0,0.8)]'>Google</button>
                                    <button className='w-2/5 bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md shadow-[5px_6px_0_0_rgba(0,0,0,0.8)]'>Apple</button>
                                </div>
                            </div>
                            <div className="connect-with-us flex w-full justify-around mt-10">
                                <img src={Instagram} alt="" className='h-12'/>
                                <img src={Snapchat} alt="" className='h-12'/>
                                <img src={X} alt="" className='h-12'/>
                                <img src={Whatsapp} alt="" className='h-12'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login