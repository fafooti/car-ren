import React from 'react'
import search from "/public/icons/searchCar.svg"
import notification from "/public/icons/notification.svg"
import leftArrow from "/public/icons/arrowLeft.svg"
import Image from 'next/image'
function Header() {
  return (
    <div className='w-full flex justify-end item-center gap-8 bg-white h-[80px] px-14'>
      <Image src={search}/>
      <Image src={notification}/> 
      <div className='flex gap-2 items-center  '>
        <Image src={leftArrow}/>
        <span>Hi</span>
        Fateme Amiri
      </div>
    </div>
  )
}

export default Header
