import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from "../assets/Images/Logo.svg"
import Container from "../Components/Container"
import { FaHeart } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MainContext } from '../MainContext';
import { logout } from '../Reducers/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { GrLogin } from "react-icons/gr";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {
    const [NavColor, SetNavColor] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { WistList, SetOpenCart } = useContext(MainContext)
    const auth = useSelector(state => state.user.data?.auth);
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const NavRef = useRef()
    useEffect(() => {
        const handleScroll = () => {
            if (Math.floor(window.scrollY) > 100) {
                SetNavColor(true)
            } else SetNavColor(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    useGSAP(() => {
        gsap.from(NavRef.current, {
            y: -20,
            duration: 2,
            delay: 1,
            opacity: 0,
            ease: "power2.in"
        })
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);


    const menu = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "All Watches",
            path: '/store'
        },
        {
            name: "About",
            path: "/about"
        }
    ]



    return (
        <div ref={NavRef} className={`w-full fixed top-10 z-10 text-white px-4  font-[cinzel]`} >
            <Container clasess={` w-full p-4 flex items-center justify-between rounded-3xl ${NavColor === true ? "bg-[#0B0B0B]/80 ,backdrop-blur-md " : " bg-transparent"}  duration-300  `}>
                <img src={Logo} alt="" className='w-12' />
                <ul className='md:flex hidden items-center gap-10  font-semibold uppercase'>
                    {
                        menu.map((item, i) => {
                            return (
                                <Link to={item.path} key={i} className=' cursor-pointer hover:text-blue-400 duration-300 '>{item.name}</Link>
                            )
                        })
                    }

                </ul>
                <div className=' flex items-center gap-5 text-xl '>
                    <div className='md:block relative hidden ' onClick={() => Navigate("/my-wistlist")}>
                        <FaHeart className='relative cursor-pointer  hover:text-red-400 ' />
                        <h1 className='absolute -top-3 -right-3 bg-red-600 rounded-full w-5 h-5 text-center text-sm'>{WistList.length}</h1>
                    </div>
                    <AiOutlineMenu className='md:hidden block text-2xl cursor-pointer' onClick={() => setMenuOpen(true)} />
                    <FaCartShopping className=' cursor-pointer md:block hidden hover:text-blue-400' onClick={() => SetOpenCart(true)} />
                    {
                        auth === true ?
                            <FaUser className=' cursor-pointer md:block hidden hover:text-blue-400 ' onClick={() => Navigate("/my-order")} /> :
                            <GrLogin className=' cursor-pointer md:block hidden hover:text-blue-400 ' onClick={() => Navigate("/login")} />
                    }
                </div>
            </Container>
            {menuOpen && (
                <div onClick={() => setMenuOpen(false)} className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'></div>
            )}
            <div className={`fixed top-0 right-0 h-full bg-[#0B0B0B] text-white z-[99] p-6 w-[75%] sm:w-[60%] md:w-[40%] transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>

                <div className='flex items-center justify-between mb-10'>
                    <img src={Logo} alt="Logo" className='w-12' />
                    <IoClose onClick={() => setMenuOpen(false)} className='text-3xl cursor-pointer hover:text-red-500' />
                </div>

                <ul className='flex flex-col gap-8 font-semibold text-lg'>
                    {menu.map((item, i) => (
                        <Link to={item.path} key={i} onClick={() => setMenuOpen(false)} className='hover:text-blue-400 duration-300'>
                            {item.name}
                        </Link>
                    ))}
                </ul>
                <div className='flex items-center gap-4 justify-center mt-10 text-2xl'>
                    <div className='md:hidden block relative  ' onClick={() => {
                        Navigate("/my-wistlist")
                        setMenuOpen(false)
                    }}>
                        <FaHeart className='relative cursor-pointer  hover:text-red-400 ' />
                        <h1 className='absolute -top-3 -right-3 bg-red-600 rounded-full w-5 h-5 text-center text-sm'>{WistList.length}</h1>
                    </div>
                    <FaCartShopping className=' cursor-pointer  md:hidden block hover:text-blue-400' onClick={() => {
                        SetOpenCart(true)
                        setMenuOpen(false)
                    }} />
                    <FaUser className=' cursor-pointer  md:hidden block hover:text-blue-400' onClick={() => {
                        Navigate("/my-order")
                        setMenuOpen(false)
                    }} />
                </div>
                {
                    auth === true ? <button onClick={() => dispatch(logout({ auth: false }))} className='mt-10 py-3 px-5 text-center bg-blue-500 w-full mx-auto font-semibold rounded-lg cursor-pointer'>Logout </button>
                        : <button onClick={() => Navigate("/login")} className='mt-10 py-3 px-5 text-center bg-blue-500 w-full mx-auto font-semibold rounded-lg cursor-pointer'>Login </button>

                }
            </div>
        </div>
    )
}

export default Header