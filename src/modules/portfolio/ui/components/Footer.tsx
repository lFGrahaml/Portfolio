import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 text-lg'>
      <div className='text-center '>
        <Image src='/assets/logo.png' alt='logo icon' width={260} height={230} className='rounded-xl w-28 cursor-pointer mx-auto' />

        <div className='w-max flex items-center gap-2 mx-auto py-3'>
          <Image src='/assets/mail_icon.png' alt='mail icon' width={260} height={230} className='w-6' />
          fernandograhambusiness@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@2025 Fernando Graham. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://github.com/lFGrahaml'>Github</a></li>
          <li><a target='_blank' href='www.linkedin.com/in/fernandograham'>LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer