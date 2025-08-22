'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => setIsOpen(true);
  const closeSideBar = () => setIsOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, [])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src="/assets/header-bg-color.png" alt='' width={800} height={400} className='w-full mx-auto justify-center' />
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
        <a href="#top">
          <Image src={"/assets/logo.png"} alt="Website logo" width={260} height={230} className='rounded-xl w-28 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg:white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
          <li><a className='font-display' href="#top">Home</a></li>
          <li><a className='font-display' href="#about">About Me</a></li>
          <li><a className='font-display' href="#services">Services</a></li>
          <li><a className='font-display' href="#work">My Work</a></li>
          <li><a className='font-display' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={() => setIsDarkMode((prev:boolean) => !prev)}>
            <Image src={isDarkMode ? "/assets/sun_icon.png" : "/assets/moon_icon.png"} alt='' width={20} height={20} className='w-6 cursor-pointer'/>
          </button>

          <a href="#contact" className='font-display hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact<Image src={isDarkMode ? "/assets/arrow-icon-dark.png": "/assets/arrow-icon.png"} alt="Arrow icon" width={39} height={39} className='w-3'/> </a>

          <button className='block md:hidden ml-3 cursor-pointer' onClick={openSideBar}>
            <Image src={isDarkMode ? "/assets/menu-white.png" : "/assets/menu-black.png"} alt='' width={20} height={20} className='w-6'/>
          </button>
        </div>

        {/* Sidebar */}

        <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white ${isOpen ? 'translate-x-[-16rem]' : 'translate-x-[16rem]'}`}>

          <div className='absolute right-6 top-6' onClick={closeSideBar}>
            <Image src={isDarkMode ? "/assets/close-white.png": "/assets/close-black.png"} alt='' width={20} height={20} className='w-5 cursor-pointer'/>
          </div>

          <li><a className={`font-display ${isOpen ? 'translate-x-[-16rem]' : 'translate-x-[16rem]'}`} onClick={closeSideBar} href="#top">Home</a></li>
          <li><a className={`font-display ${isOpen ? 'translate-x-[-16rem]' : 'translate-x-[16rem]'}`} onClick={closeSideBar} href="#about">About Me</a></li>
          <li><a className={`font-display ${isOpen ? 'translate-x-[-16rem]' : 'translate-x-[16rem]'}`} onClick={closeSideBar} href="#services">Services</a></li>
          <li><a className={`font-display ${isOpen ? 'translate-x-[-16rem]' : 'translate-x-[16rem]'}`} onClick={closeSideBar} href="#work">My Work</a></li>
          <li><a className={`font-display ${isOpen ? 'translate-x-[-16rem]' : 'translate-x-[16rem]'}`} onClick={closeSideBar} href="#contact">Contact Me</a></li>

        </ul>
      </nav>
    </>
  )
}

export default Navbar