import Image from 'next/image'
import React from 'react'
import { infoList, toolsData } from '../../../public/assets/assets'


const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About Me</h2>

      <div className='flex 2-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div>
          <Image src="/assets/LinkedInPhoto.png" alt="user" width={350} height={300} className='w-64 sm:w-80 rounded-3xl max-w-none'/>
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl'>I am a recent graduate out of Arizona State University for software engineering, where I have had the opportunity to work on hands on projects that have had real world impact and showcase technical depth.</p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                key={index} >
                  <Image src={icon} alt={title} width={350} height={300} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700'>Tools in frequent use</h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
              key={index}>
                <Image src={tool} alt='Tool' width={50} height={50} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About