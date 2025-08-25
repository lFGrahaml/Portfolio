'use client';

import Image from 'next/image'
import { motion } from 'motion/react'

import { infoList, toolsData } from '../../../../../../public/assets/assets'
import { useDarkMode } from '../controller/DarkModeProvider';

const About = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id="about"
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg'
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl'
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex 2-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
        >
          <Image src="/assets/LinkedInPhoto.png" alt="user" width={350} height={300} className='w-64 sm:w-80 rounded-3xl max-w-none'/>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl'>I&apos;m a recent graduate out of Arizona State University for software engineering, where I&apos;ve had the opportunity to work on hands on projects that have had real world impact and showcase technical depth.</p>
          <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li
                whileHover={{scale: 1.05}}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}
              >
                  <Image src={isDarkMode ? iconDark : icon} alt={title} width={350} height={300} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white sm:text-sm'>{title}</h3>
                  <p className='text-gray-600 text-sm dark:text-white/80 lg:text-xs'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.9}}
            className='my-6 text-gray-700 dark:text-white/80'
          >
            Tools in frequent use
          </motion.h4>

          <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 1.5}}
            className='flex items-center gap-3 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{scale: 1.1}}
              className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 py-3 px-3'
              key={index}>
                <Image src={tool} alt='Tool' width={50} height={50} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About