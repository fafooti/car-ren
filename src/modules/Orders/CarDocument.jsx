import Input from "@/components/Input/Input";
import React from "react";
import arrowSquare from "/public/icons/arrowSquare.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";
function CarDocument() {
  return (
    <div className=" w-full px-4 bg-white mt-10   ">
      <div className="border-b flex justify-between py-10 ">
        <p>Period Date</p>
        <Image src={arrowSquare} />
      </div>
      <div className="border-b pb-8 flex gap-x-16 gap-y-8 flex-wrap my-10">
        <Input
          //   onChange={handleLicenseDate}
          //   value={licenseDate}
          type="date"
          label="pickup date"
          desc="Enter the date of International certificate"
          placeholder="Enter Date"
          className="text-secondaryGray bg-secondaryPurple py-2.5 px-4 rounded w-[311px] "
        />
        <Input
          //   onChange={handleLicenseDate}
          //   value={licenseDate}
          type="date"
          label="International driving license expiration date"
          desc="Enter the date of International certificate"
          placeholder="Enter Date"
          className="text-secondaryGray bg-secondaryPurple py-2.5 px-4 rounded w-[311px] "
        />
      </div>
      <Button
        className={`border rounded mb-7 border-primaryBlue text-primaryBlue px-12 py-3`}
      >
        Clear All Data
      </Button>
    </div>
  );
}

export default CarDocument;
