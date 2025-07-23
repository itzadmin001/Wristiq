import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from 'react-router-dom'
import Cart from './Cart'

function Main() {
    return (
        <div className=' overflow-hidden'>
            <Header />
            <Cart />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main
