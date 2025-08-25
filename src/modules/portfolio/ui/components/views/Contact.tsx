'use client';

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react';

const Contact = () => {
  const [result, setResult] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);



  const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "4c3429d2-c871-4f57-b8fd-b6a8e518b6cd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent!");
      setIsError(true);
      form.reset();
    } else {
      console.log("Error", data);
      setIsError(false);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0,opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg'
      >
        Want to chat?
      </motion.h4>
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0,opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl'
      >
        Contact Me!
      </motion.h2>
      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12'
      >
        If you have any questions, comments, feedback, or just want to chat. Feel free to leave me a message below!
      </motion.p>

      <motion.form
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-[var(--columns-auto)] gap-6 mt-10 mb-8'>
          <motion.input
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.1}}
            type='text' placeholder='Name' required name='name'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
          />
          <motion.input
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            type='email' placeholder='Email' required name='email'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
          />
        </div>

        <motion.textarea
          initial={{y: 100, opacity: 0}}
          whileInView={{y: 0,opacity: 1}}
          transition={{duration: 0.6, delay: 1.3}}
          rows={6}
          placeholder='Enter your message'
          required name='message'
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
        />

        <motion.button
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-lg mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover cursor-pointer'
        >
          Send message
          <Image src='/assets/right-arrow-white.png' alt='right arrow' width={8} height={8} className='w-4'/>
        </motion.button>

        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.9}}
          className={`text-lg margin-top  py-5 ${isError ? 'text-green-600' : 'text-red-600'}`}
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  )
}

export default Contact