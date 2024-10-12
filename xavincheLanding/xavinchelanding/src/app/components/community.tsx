'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTelegram } from 'react-icons/fa6';

export default function Community() {
  const [isInView, setIsInView] = useState(false);
const handleScroll = () => {
    const section = document.getElementById('community-section');
    
    // Check if the section exists before trying to access its properties
    if (section) {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
      if (isVisible) {
        setIsInView(true);
      }
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        id="community-section"
        className="lg:min-h-[300px] w-full mx-auto lg:mt-10 overflow-hidden"
        initial={{ opacity: 0, x: -100 }} // start from left
        animate={isInView ? { opacity: 1, x: 0 } : {}} // ease in
        transition={{ duration: 1 }}
      >
        <div className="lg:py-20 py-10 lg:max-w-5xl mx-auto bg-[#181818e9] rounded-md flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <h3 className="text-xl font-bold font-raleway tracking-widest">NewsLetter</h3>
          </div>
          <div className="flex justify-center items-center lg:py-5 lg:px-10 md:px-20">
            <p className="text-white text-sm font-raleway px-10 text-center">
              Questions? Comments? Feedback? We are interested! <br className="hidden lg:flex" />
              Be part of the Xavinche journey. We are looking forward to it!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="py-3 px-6 rounded-md bg-[#D905E5] text-white text-sm flex gap-2 items-center justify-between font-raleway hover:bg-white hover:text-[#D905E5]"
            >
             <FaTelegram/> Join our Telegram Community
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
