import React, { useContext, useEffect, useRef, useState } from 'react'

import Signimage from "../assets/Images/SignUpimage.avif"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MainContext } from '../MainContext';
import { SignupUser } from '../Reducers/UserSlice';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { notify } = useContext(MainContext)
    const user = useSelector(state => state.user.data)
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const ImageRef = useRef()
    const FormRefRef = useRef()


    useEffect(() => {
        if (user) {
            if (user.auth === true) {
                Navigate("/");
            } else if (user.auth === false) {
                Navigate("/login"); // Auth false, force login
            }
        }
    }, [user, Navigate]);



    const SignUpHandler = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirm_password.value
        };

        if (!data.name || !data.email || !data.password || !data.confirmPassword) {
            notify("All Fields are mandatory", "error");
            return;
        }

        if (data.password !== data.confirmPassword) {
            notify("Password and Confirm Password not matched", "error");
            return;
        }

        if (user?.data?.email === data.email && user?.auth === true) {
            notify("Email already exists. Please login to continue", "error");
            return;
        }

        const userData = {
            data: {
                email: data.email,
                password: data.password
            },
            auth: true
        };

        dispatch(SignupUser(userData));
        e.target.reset();
        notify("Registered Successfully", "success");
        Navigate("/");
    };



    useGSAP(() => {
        gsap.from(ImageRef.current, {
            x: 100,
            duration: 2,
            opacity: 0,
            ease: "power3.out",
        })
        gsap.from(FormRefRef.current, {
            x: -100,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        },)

    }, []);




    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row-reverse overflow-hidden">
            {/* Right Image Section */}
            <div className="md:w-1/2 w-full h-64 md:h-auto" ref={ImageRef}>
                <img
                    src={Signimage}
                    alt="Signup"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Left Form Section */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-8 font-[cardo]" ref={FormRefRef}>
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[cinzel]">Create Account</h2>

                    <form className="space-y-4" onSubmit={SignUpHandler}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name='name'
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    name='password'
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </span>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    name='confirm_password'
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                />
                                <span
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? '🙈' : '👁️'}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full font-[cinzel] bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-sm text-center font-[cinzel] text-gray-500 mt-4">
                        Already have an account? <Link to={"/login"} className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SignUp
