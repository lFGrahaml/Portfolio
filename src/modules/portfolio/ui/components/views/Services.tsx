'use client';

import Image from 'next/image'
import { motion } from 'motion/react'

import { serviceData } from '../../../../../../public/assets/assets'

const Services = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      id="services" className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center mb-2 text-lg'
      >
        What I specialize in
      </motion.h4>
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.8}}
        className='text-center text-5xl'
      >
        Services
      </motion.h2>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 1.1}}
        className='grid grid-cols-[var(--columns-auto)] gap-6 my-10'
      >
          {serviceData.map(({icon, title, description, link}, index) => (
            <motion.div
              whileHover={{scale: 1.05}}
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
              key={index}
            >
              <Image src={icon} alt='icon' width={20} height={20} className='w-10'/>
              <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
              <a className='flex items-center gap-2 text-sm mt-5'
              href={link}>Read more <Image src='/assets/right-arrow.png' alt='arrow' width={8} height={8} className='w-4'/></a>
            </motion.div>
          ))}
      </motion.div>

    </motion.div>
  )
}

export default Services
