import React from 'react'
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import backArrow from "/public/icons/backFlash.svg";

import arrow from "/public/icons/arrow.svg";
function Navigations() {
  return (
    <div className="my-8">
      <div className="md:flex-row flex gap-2.5 flex-col md:items-center">
        <Button className="md:bg-white px-5 py-3  rounded-md text-secondaryGray">
          {" "}
          <img src={backArrow.src} />
          Back
        </Button>
        <div className="flex flex-col  md:flex-row gap-2 items-center font-semibold">
          <Link href="/" className=" text-secondaryGray">
            All Orders
          </Link>
          <Image width={20} height={10} src={arrow.src} />
          <Link href="/" className="">
            Add Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigations
