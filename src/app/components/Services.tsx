import React from 'react'
import { serviceData } from '../../../public/assets/assets'
import Image from 'next/image'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>What I specialize in</h4>
      <h2 className='text-center text-5xl'>Services</h2>

      <div className='grid grid-cols-[var(--columns-auto)] gap-6 my-10'>
          {serviceData.map(({icon, title, description, link}, index) => (
            <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
            key={index}>
              <Image src={icon} alt='icon' width={20} height={20} className='w-10'/>
              <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5'>{description}</p>
              <a className='flex items-center gap-2 text-sm mt-5'
              href={link}>Read more <Image src='/assets/right-arrow.png' alt='arrow' width={8} height={8} className='w-4'/></a>
            </div>
          ))}
      </div>

    </div>
  )
}

export default Services
