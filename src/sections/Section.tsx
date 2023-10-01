import React from 'react'
import Image from 'next/image'
import section1 from '@/assets/section1.png'

const Section1 = () => {
  return (
      <div className='flex items-center font-light font-sans max-w-screen-xl mx-auto px-4'>
      <Image src={section1} alt='sec1'/>
      </div>
  )
}

export default Section1
