import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Container from './Container'

function Footer() {
    return (
        <footer className="bg-[#0B0B0B] font-[cardo] text-[#bdbaba] py-10 px-5 md:px-20 border-t border-[#1E1C1C]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Category */}
                    <div>
                        <h2 className="text-white font-bold mb-4 font-[cinzel]">CATEGORY</h2>
                        <ul className="space-y-2 text-sm">
                            <li>Aqua Watch</li>
                            <li>Digital Watch</li>
                            <li>Men Watch</li>
                            <li>Women Watch</li>
                        </ul>
                    </div>

                    {/* Collection */}
                    <div>
                        <h2 className="text-white font-bold mb-4 font-[cinzel]">COLLECTION</h2>
                        <ul className="space-y-2 text-sm">
                            <li>Vintage Watch</li>
                            <li>Galaxy Watch</li>
                            <li>Adventure Sports</li>
                            <li>Luxury Watch</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-white font-bold mb-4 font-[cinzel]">CONTACT US</h2>
                        <p className="text-sm">Van Spartan #73, 1081 Amsterdam,<br />Netherlands</p>
                        <p className="text-sm mt-2">+91 9828887630</p>
                        <p className="text-sm mt-2">Yogeshkumarswami12121@gmail.com</p>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h2 className="text-white font-bold mb-4 font-[cinzel]">FOLLOW US</h2>
                        <div className="flex space-x-5 mb-5">
                            <a href="https://github.com/itzadmin001" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={22} className="hover:text-white transition" />
                            </a>
                            <a href="https://www.instagram.com/itz__admin__01" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={22} className="hover:text-white transition" />
                            </a>
                            <a href="https://www.linkedin.com/in/yogesh-kumar-558b4b26b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={22} className="hover:text-white transition" />
                            </a>
                        </div>

                        <p className="text-sm">Stay connected for the latest updates.</p>
                    </div>

                </div>
            </Container>

            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-500 font-[cinzel]">
                © {new Date().getFullYear()} Your Brand Name. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
