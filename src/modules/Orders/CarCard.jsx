import React, { useState } from "react";
import carImage from "/public/cars/car-sample.svg";
import Image from "next/image";

function CarCard() {
  const [selectCar, setSelectCar] = useState(false);
  const hadndleSelectCar = () => {
    setSelectCar((prev) => !prev);
  };
  return (
    <div
      className={`bg-white flex flex-col w-[97px] justify-between rounded min-w-[97px] h-[110px] `}
    >
      <div className={` relative w-full h-full`}>
        <Image
          className={`${selectCar ? "opacity-10 " : "opacity-100"}`}
          src={carImage}
          width={90}
          height={100}
        />
        {selectCar && (
          <div className="absolute inset-0 text-sm px-4 text-white text-center  bg-primaryPurple opacity-50 rounded-t">
            Mercedes-Benz GLB-CLASS...
          </div>
        )}
      </div>
      <div
        onClick={hadndleSelectCar}
        className=" bg-black text-center text-sm py-2 rounded-t-none rounded text-white"
      >
        Select
      </div>
    </div>
  );
}

export default CarCard;
