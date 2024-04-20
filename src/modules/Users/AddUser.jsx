import Button from '@/components/Button/Button';
import React from 'react'
import backArrow from "/public/icons/backFlash.svg"
import Link from 'next/link';
import arrow from "/public/icons/arrow.svg"
import Image from 'next/image';
import BasicInformation from './BasicInformation';
import Documents from './Documents';
function AddUser() {
  return (
    <div className="flex  flex-col my-10 1440:w-[1114px] w-11/12 mx-auto border">
      <div className="flex gap-2.5 items-center">
        <Button className="bg-white px-5 py-3 rounded-md text-secondaryGray">
          {" "}
          <img src={backArrow.src} />
          Back
        </Button>
        <div className='flex gap-2 items-center font-semibold'>
          <Link href="/" className='text-secondaryGray'>All Users</Link>
          <Image width={20} height={10} src={arrow.src} />
          <Link href="/" className=''>Add User</Link>
        </div>
      </div>
      <BasicInformation/>
      <Documents/>
    </div>
  );
}

export default AddUser
