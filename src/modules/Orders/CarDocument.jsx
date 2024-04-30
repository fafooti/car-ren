import Input from "@/components/Input/Input";
import React, { useState } from "react";
import arrowSquare from "/public/icons/arrowSquare.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";
function CarDocument({ title, inputDetails }) {
  const [showDetails, setShowDetails] = useState(true);
  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <div className=" w-full px-4 pb-4 bg-white mt-10   ">
      <div
        onClick={handleShowDetails}
        className="border-b font-bold flex justify-between py-10 "
      >
        <p>{title}</p>
        <Image src={arrowSquare} />
      </div>
      {showDetails && (
        <>
          <div className="border-b pb-8 flex gap-x-16 gap-y-8 flex-wrap my-10">
            {inputDetails.map((item) => (
              <Input
                className="text-secondaryGray bg-secondaryPurple py-2.5 px-4 rounded w-[311px] "
                type="date"
                label={item.name}
                desc={item.desc}
                placeholder={item.placeholder}
              />
            ))}
          </div>
          <Button
            className={`border rounded mb-7 border-primaryBlue text-primaryBlue font-semibold px-12 py-3`}
          >
            Clear All Data
          </Button>
        </>
      )}
    </div>
  );
}

export default CarDocument;
