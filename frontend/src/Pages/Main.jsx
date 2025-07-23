import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from 'react-router-dom'
import Cart from './Cart'

function Main() {
    return (
        <>
            <Header />
            <Cart />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main
