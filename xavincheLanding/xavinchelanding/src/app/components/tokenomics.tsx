'use client'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Tokenomics() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="max-w-5xl mx-auto lg:flex justify-between lg:min-h-[400px] lg:mt-10 items-center md:px-20 lg:px-0 overflow-hidden"
      initial={{ opacity: 0, x: -100 }} // Start off-screen from the left
      animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to visible when in view
      transition={{ duration: 1 }}
    >
      <div className="lg:flex lg:flex-col lg:w-1/2 lg:gap-3 gap-10 font-raleway font-bold lg:px-20 px-10 py-10 lg:py-10">
        <h1 className="text-4xl pb-3">Benefits for Creators</h1>
      </div>

      <div className="lg:w-1/2 lg:px-10 px-10 lg:flex lg:flex-col gap-3 font-bold font-raleway">
        <motion.p
          className="font-raleway relative"
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="absolute -left-8 top-0 text-[#D905E5] text-5xl font-bold">“</span>
          1. The opportunity to Earn Money from your Content (NeXa). <br />
          2. A chance to grow your Audience (even if you&apos;re an Amateur in your craft) and Reach for more Post engagement.<br />
          3. The ability to Optimize Your Content&apos;s Performance.<br />
          4. The opportunity to Connect with Like-minded Creators on the platform.
          <span className="absolute -right-4 bottom-0 text-[#D905E5] text-5xl font-bold"> ”</span>
        </motion.p>
      </div>
    </motion.div>
  );
}
