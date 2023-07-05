import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const VerificationHeader = () => {
  const [position, setPosition] = useState(0);
  const pathname = useLocation().pathname;

  const handleScroll = (position) => {
    // setPosition(`${position * 100}%`);
    setPosition((100 * position).toString() + '%');
  };

  useEffect(() => {
    switch (pathname) {
      case '/KYC':
        setPosition('0%');
        break;
      case '/KYC/WebInformation':
        setPosition('100%');
        break;
      case '/KYC/DocsInformation':
        setPosition('200%');
        break;
      default:
        break;
    }
  }, [pathname]);
  

  return (
    <>
      <div className="relative flex items-center justify-between 
      md:justify-around w-full py-4 md:gap-20 [&>a]:text-center">
        <Link to={"/KYC"} className='text-sm md:text-2xl focus:font-semibold '
          onClick={() => handleScroll(0)}
        >Personal Information</Link>
        <Link to={"/KYC/WebInformation"} className='text-sm md:text-2xl focus:font-semibold'
          onClick={() => handleScroll(1)}
        >Web Information</Link>
        <Link to={"/KYC/DocsInformation"} className='text-sm md:text-2xl focus:font-semibold'
          onClick={() => handleScroll(2)}
        >Document Information</Link>
        
        <div 
        style={{
          transform: `translateX(${position})`
        }}
        className={`absolute w-[33.3%] h-2 md:h-3 bg-[#C7F609] rounded-xl transform top-[95%] md:top-[90%] left-0
        transition-all duration-500 ease-in-out`}></div>
      </div>
      <hr className='mx-6 md:mx-12' />
    </>

  )
}

export default VerificationHeader