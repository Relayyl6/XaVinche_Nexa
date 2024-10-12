'use client'
import Link from 'next/link'
import { useState } from 'react'
import {FaDiscord,FaXTwitter,FaGithub, FaTelegram} from 'react-icons/fa6'
import Image from 'next/image'

export default function Footer(){

    const [isSucessful, setIsSucessful] = useState(false)
    const handleSubscription = () =>{
        setIsSucessful(!isSucessful);
        setTimeout(() =>{
            setIsSucessful(false)
        },3000);
    }
    return(
        <>
            <footer className="lg:min-h-[300px] w-full lg:mt-5 p-8 min-h-[550px] bg-[#000] lg:bg-transparent md:px-20 pb-20">
                <div className="lg:max-w-5xl lg:h-[350px] h-[500px] mx-auto">
                    <div className="lg:flex justify-between lg:p-10">
                        <div className="lg:flex lg:flex-col gap-4">
                        <div className="flex justify-start gap-2">
                        {/* <h3 className="lg:text-xl text-3xl font-bold font-raleway tracking-widest">Xavinche</h3> */}
                        <Image
                            src="/images/logo1.png"
                            alt="logo"
                            className="w-28 h-28 lg:w-36 lg:h-36"
                        />
                        </div>
                        <div className='lg:mt-[-70px]'>
                            <p className="text-sm font-raleway text-gray-400">Decentralised Social Media and Minting Platform</p>
                        </div>
                        <ul className="flex space-x-4 lg:mt-4 lg:py-3 py-7">
                        <li><a href="#" className="text-gray-100 hover:text-[#D905E5]"><FaXTwitter/></a></li>
                        <li><a href="#" className="text-gray-100 hover:text-[#D905E5] w-14"><FaDiscord/></a></li>
                        <li><a href="#" className="text-gray-100 hover:text-[#D905E5]"><FaTelegram/></a></li>
                        <li><a href="#" className="text-gray-100 hover:text-[#D905E5]"><FaGithub/></a></li>
                        </ul>
                        </div>
                        <div className='lg:flex lg:flex-col items-start font-raleway text-xs font-bold lg:px-5 gap-3 md:w-3/5'>
                        <p className='font-raleway text-sm'>Get Updates</p>
                        {isSucessful? <p className='text-sm text-[#D905E5] transition-colors delay-100'>Subscription Sucessful! Thank you for subscribing</p>:null}
                        <div className="flex space-x-2 mt-5 lg:mt-2">
                        <input
                        type="email"
                        placeholder="Your email"
                        className="text-sm px-3 lg:px-6 py-2 rounded-md w-2/3 bg-[#292929b9]"
                        />
                        <button onClick={handleSubscription} className="font-light bg-gray-100 text-[#D905E5] px-4 py-2 rounded-md hover:bg-[#D905E5] hover:text-white text-sm w-1/3">
                        submit
                        </button>
                        </div>
                        </div>
                        <div className='flex justify-start lg:justify-center font-raleway text-sm font-normal mt-5 lg:mt-0'>
                            <ul className='lg:flex lg:flex-col space-y-3'>
                                <li><a href="" className='hover:text-[#D905E5]'>About</a></li>
                                <li><a href="" className='hover:text-[#D905E5]'>Tokenomics</a></li>
                                <li><a href="" className='hover:text-[#D905E5]'>Docs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:p-10 mt-20 lg:mt-0 lg:flex-row lg:justify-between lg:items-center flex flex-col gap-2'>
                    <div>
                   <p className='text-sm'>Xavinche &copy; 2024</p>
                    </div>
                    <div className='lg:flex-row lg:justify-between lg:gap-3 flex flex-col gap-2'>
                        <Link href='#'>
                            <p className='text-sm hover:text-[#D905E5]'>Terms & conditions</p>
                        </Link>
                        <Link href='#'>
                            <p className='text-sm hover:text-[#D905E5]'>Privacy Policy</p>
                        </Link>
                        <Link href='#'>
                            <p className='text-sm hover:text-[#D905E5]'>FAQs</p>
                        </Link>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
} 