import Input from "@/components/Input/Input";
import React from "react";
import arrowSquare from "/public/icons/arrowSquare.svg"
import Image from "next/image";
function BasicInformation() {
  return (
    <div className=" w-full px-4 bg-white mt-10   ">
      <div className="border-b flex justify-between py-10 ">
        <p>Basic information</p>
        <Image src={arrowSquare}/>
      </div>
      <div className="flex gap-x-16 gap-y-8 flex-wrap">
        <Input
          desc="Enter name"
          label="Name"
          placeholder="John"
          className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
        />

        <Input
          desc="Enter name"
          label="Name"
          placeholder="John"
          className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
        />
        <Input
          desc="Enter name"
          label="Name"
          placeholder="John"
          className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
        />
        <Input
          desc="Enter name"
          label="Name"
          placeholder="John"
          className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
        />
        <Input
          desc="Enter name"
          label="Name"
          placeholder="John"
          className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
        />
      </div>
    </div>
  );
}

export default BasicInformation;
