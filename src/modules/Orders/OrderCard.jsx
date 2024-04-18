import React from "react";
import carImage from "/public/cars/carimage.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";
import CTA from "/public/cars/cta.svg"
import cancleIcon from "/public/cars/cancelIcon.svg";



function OrderCard() {
  return (
    <article className="flex items-center justify-around border-t text-xs w-full px-4 py-6 bg-white ">
      <div className="w-1/5 flex items-start gap-2">
        <input type="checkbox" />
        <Image width={120} height={68} src={carImage} />
      </div>
      <div className="pl-4 w-2/5">
        <p className="max-w-[128px]">
          Lorem ipsum dolor sit adipisicing elit. Inventore, eaque!
        </p>
      </div>
      <div className="w-1/5">fateme amiri</div>
      <div className="w-1/5 flex flex-col items-center">
        <Button className="bg-secondaryGray  p-2">
          <Image src={cancleIcon} />
          Canceled
        </Button>
        <p className="">Request</p>
      </div>
      <div className="w-1/5">1200 dirham</div>
      <div className="w-1/5">22 jun-30 jun</div>
      <div className="w-1/5 flex justify-end">
        <Image src={CTA} />
      </div>
    </article>
  );
}

export default OrderCard;
