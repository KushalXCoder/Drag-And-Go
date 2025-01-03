import React from 'react';
import Background from "../Other/Background.jpeg";
import "../Styles/Login.css";
import Instagram from "../Other/instagram.png";
import Snapchat from "../Other/social.png";
import X from "../Other/x.png";
import Whatsapp from "../Other/whatsapp.png";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setUserDetails({...userDetails, [id]: value});
    }

    const [signUp, setSignUp] = useState(true);

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        console.log(userDetails);

        if(signUp) {
            try {
                const response = await axios.post("http://localhost:3000/users/signin", userDetails);
                console.log(response.data);  
            } catch (error) {
                console.log(error);
            }
        }
        else {
            try {
                const response = await axios.post("http://localhost:3000/users/login", userDetails);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        navigate('/dashboard');
    }

    return (
        <>
            <div className="container1 h-screen w-screen bg-black justify-items-center content-center relative overflow-hidden">
                <img src={Background} alt="" className='absolute top-0'/>
                <div className="login-form min-h-4/5 min-w-4/5 h-4/5 w-4/5 rounded-md flex justify-center">
                    <div className="form-container h-full w-2/5 border border-white p-5">
                        <h1 className='welcome text-center text-3xl mt-2'>Welcome !</h1>
                        <form className="max-w-sm mx-auto mt-10" onSubmit={(e) => handleUserSubmit(e)}>
                            {signUp && (
                            <div className="mb-5 flex">
                                <input type="text" id="firstname" value={userDetails.firstname} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 me-3" placeholder="First Name" required />
                                <input type="text" id="lastname" value={userDetails.lastname} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last Name" required />
                            </div>
                            )}
                            <div className="mb-5 flex items-center">
                                <input type="email" id="email" value={userDetails.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Email" required />
                            </div>
                            <div className="mb-5 flex">
                                <input type="password" id="password" value={userDetails.password} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Password" required />
                            </div>
                            <div className="submit-container w-full flex justify-center">
                                <button type="submit" className="submit-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 px-5 py-2.5 shadow-[10px_10px_0_0_rgba(0,0,0,0.8)]">
                                    {signUp ? 'Sign In' : 'Log In'}
                                </button>
                            </div>
                            {signUp ? (
                            <p className='text-center mt-5 text-blue-900'>Already have an account ?
                                <span className="font-bold text-blue-900 hover:underline" onClick={() => setSignUp(false)}> Log In</span>
                            </p>
                            )
                            :
                            (
                            <p className='text-center mt-5 text-blue-900'>New User ?
                                <span className="font-bold text-blue-900 hover:underline" onClick={() => setSignUp(true)}> Sign In</span>
                            </p>
                            )}
                            <hr className='mt-2'/>
                            <div className="other-options">
                                <h3 className='text-center mt-5 text-lg text-blue-900'>Continue with : </h3>
                                <div className="buttons w-full mt-5 flex justify-around">
                                    <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    useOneTap
                                    />
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