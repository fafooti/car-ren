import Input from "@/components/Input/Input";
import React, { useState } from "react";
import Image from "next/image";
import arrowSquare from "/public/icons/arrowSquare.svg";
import CarCard from "./CarCard";
import car from "./car.module.css";
import Button from "@/components/Button/Button";

function CarSelection() {
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <div className="flex bg-white flex-col my-10     border">
      <div className=" border-b py-8 w-full px-6 justify-between flex">
        <p className="text-lg font-semibold"> Select Car</p>
        <Image onClick={handleShowDetails} className="" src={arrowSquare} />
      </div>
      {showDetails && (
        <>
          <div className="py-4 border-y px-6  ">
            <Input
              desc="Select Car or Add new Car"
              label="Car"
              placeholder="Search Car Here"
              className="outline-none bg-secondaryPurple py-2.5 px-4 rounded w-full text-black"
            />
            <div className={`${car.container} overflow-hidden mt-4  `}>
              <div
                className={`${car.slider} bg-secondaryPurple p-4 flex overflow-x-auto gap-5`}
              >
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
              </div>
            </div>
          </div>
          <Button
            className={`mx-6 w-fit  bg-primaryBlue px-12 py-2 my-8 text-white`}
          >
            Add New Car
          </Button>
        </>
      )}
    </div>
  );
}

export default CarSelection;
