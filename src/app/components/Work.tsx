import React from 'react'
import { workData } from '../../../public/assets/assets'
import Image from 'next/image'

const Work = () => {
  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Personal projects</h4>
      <h2 className='text-center text-5xl'>My Work</h2>

      <div className='grid grid-cols-[var(--columns-auto)] gap-5 my-10'>
        {workData.map((project, index) => (
          <div key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 gap-1">
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold ">{project.title}</h2>
                <p className="text-sm text-gray-700 ">{project.description}</p>
              </div>

              <div className="flex-shrink-0 border rounded-full border-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src="/assets/send-icon.png"
                  alt="send icon"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
        Show more <Image src='/assets/right-arrow-bold.png' alt='right arrow' width={8} height={8} className='w-4'/>
      </a>
    </div>
  )
}

export default Work