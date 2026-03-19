import React from 'react'
import {motion} from 'motion/react'

const CallToAction = () => {
  return (
    <>
      <div className='flex justify-center py-15'>
        <div className='flex flex-col justify-center items-center'>
        <motion.span
        whileInView={{
          x:[100,0],
          transition: {duration:1.20},
          opacity:[0,1]
          
        }} className='font-clash font-bold text-5xl lg:text-7xl text-amber-50 text-center'>¿Te gustaria que hiciera </motion.span>
        <motion.span
        whileInView={{
          y:[50,0],
          transition: {duration:1.20},
          opacity:[0,1]
          
        }} className='font-clash font-bold text-3xl lg:text-6xl text-purple-600 text-center'>parte de tu equipo?</motion.span>
      </div>
      </div>
    </>
  )
}

export default CallToAction
