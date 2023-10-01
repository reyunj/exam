import React from 'react'
import Image from 'next/image'
import HeroPoster from '@/assets/HeroPoster.png'

const Hero = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-between '>
      <Image src={HeroPoster} alt='heroposter'/>
      </div>
    </div>
  )
}

export default Hero