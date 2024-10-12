'use client'
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <section className="relative">
                <div className="max-w-5xl mx-auto flex justify-between items-center py-5 px-4 lg:py-6">
                    {/* Logo Section */}
                    <div className="flex items-center w-full justify-between">
                        <button 
                            className="lg:hidden mt-[-45px] p-2 focus:outline-none" 
                            onClick={toggleMenu}
                        >
                            {!isMenuOpen ? (
                                // Menu Icon
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-10 w-10" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M4 6h16M4 12h16m-7 6h7" 
                                    />
                                </svg>
                            ) : (
                                // Close Icon
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-10 w-10" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            )}
                        </button>
                        <Image
                            src="/images/logo1.png"
                            alt="logo"
                            className="w-28 h-28 lg:w-36 lg:h-36"
                        />
                    </div>

                    {/* Large Screen Navigation */}
                    <nav className="hidden lg:flex lg:gap-6 text-sm lg:mt-[-65px]">
                        <ul className="flex gap-6 items-center">
                            <li><a href="#" className="hover:text-[#D905E5] font-raleway transition-colors delay-200 font-medium">About</a></li>
                            <li><a href="#" className="hover:text-[#D905E5] font-raleway font-medium">Tokenomics</a></li>
                            <li><a href="#" className="hover:text-[#D905E5] font-raleway font-medium">Docs</a></li>
                        </ul>
                    </nav>
                </div>
            </section>

            {/* Mobile Menu with Smooth Animation */}
            <div 
                className={`lg:hidden bg-[#000] shadow-md w-full left-0 fixed top-0 z-50 overflow-hidden transition-all duration-700 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'}`}
                style={{ transitionProperty: 'max-height, opacity, transform' }}
            >
                <div className="flex justify-between items-center p-4">
                    {/* <h3 className="text-white text-xl font-bold">Xavinche</h3> */}
                    <Image
                            src="/images/logo1.png"
                            alt="logo"
                            className="w-28 h-28 lg:w-36 lg:h-36"
                        />
                    <button 
                        className="p-2 focus:outline-none text-white mt-[-50px]" 
                        onClick={toggleMenu}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-10 w-10" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul className="flex flex-col gap-4 p-4 mt-[-60px]">
                        <li><a href="#" className="hover:text-[#D905E5] font-raleway transition-colors delay-200 font-semibold text-white">About</a></li>
                        <li><a href="#" className="hover:text-[#D905E5] font-raleway font-semibold text-white">Tokenomics</a></li>
                        <li><a href="#" className="hover:text-[#D905E5] font-raleway font-semibold text-white">Docs</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
