import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src="/assets/LinkedInPhoto.png" alt="Profile Picture" width={400} height={400} className='rounded-full w-64'/>
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
        Hi, I am Fernando Graham
        <Image src="/assets/hand-icon.png" alt="hand icon" width={100} height={100} className="w-6"/>
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>
        Full-Stack Web Developer based in Arizona.
      </h1>
      <p className='max-w-2xl mx-auto'>

      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>Contact Me <Image src="/assets/right-arrow-white.png" alt="white arrow" width={100} height={100} className='w-4'/>
        </a>
        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full  border-gray-500 flex items-center gap-2'> Resume <Image src="/assets/download-icon.png" alt="download icon" width={100} height={100} className='w-4'/>
        </a>
      </div>
    </div>
  )
}

export default Header
