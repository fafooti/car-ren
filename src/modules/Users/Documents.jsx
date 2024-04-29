import React, { useState } from "react";
import arrowSquare from "/public/icons/arrowSquare.svg";
import Image from "next/image";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import fileIcon from "/public/icons/fileIcon.svg";
import FileUploader from "@/components/FileUploader/FileUploader";
function Documents() {
  const [showDetails, setShowDetails] = useState(true);
  const [area, setArea] = useState("");
  const [licenseDate, setLicenseDate] = useState();
  const [expirationDate,setExpirationdate]=useState()
  const handleLicenseDate = (e) => {
    setLicenseDate(e.target.value);
  };
  const handleSelectArea = (e) => {
    e.preventDefault();
    setArea(e.target.value);
  };
  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <div className=" w-full px-4 bg-white mt-10   ">
      <div className="border-b flex justify-between py-10 ">
        <p>Document</p>
        <Image
          onClick={handleShowDetails}
          className={`${showDetails ?? "rotate-180"} : ""`}
          src={arrowSquare}
        />
      </div>
      {showDetails && (
        <>
          <div className="border-b flex flex-col gap-2.5 py-10">
            <p className=" ">Type of citizenship</p>
            <p className="text-secondaryGray">Select the type of citizenship</p>
            <select
              value={area}
              onChange={handleSelectArea}
              className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-secondaryGray"
            >
              <option value="">Select citizenship </option>
              <option value="one">one </option>
              <option value="two">two</option>
            </select>
          </div>
          {/* <Button
            className={`border rounded mb-7 border-primaryBlue text-primaryBlue px-12 py-3`}
          >
            Clear All Data
          </Button> */}
          {area && (
            <>
              <FileUploader title="Emirates driving license Cover" />
              <div className="flex gap-x-16 gap-y-8 flex-wrap my-10 py-4 border-b ">
                <Input
                  desc="Enter the number of International certificate"
                  label="International driving license number"
                  placeholder="B10010194-138"
                  className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
                />
                <Input
                  label="International driving license date"
                  desc="Enter the date of International certificate"
                  placeholder="John"
                  className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
                />
                <Input
                  onChange={handleLicenseDate}
                  value={licenseDate}
                  type="date"
                  label="International driving license expiration date"
                  desc="Enter the date of International certificate"
                  placeholder="Enter Date"
                  className="text-secondaryGray bg-secondaryPurple py-2.5 px-4 rounded w-[311px] "
                />
              </div>
            </>
          )}
          <div className="mt-10">
            <FileUploader title="Passport cover" />
            <div className="flex gap-x-16 gap-y-8 flex-wrap my-10 py-4 border-b ">
              <Input
                desc="Enter the number of International certificate"
                label="International driving license number"
                placeholder="B10010194-138"
                className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
              />
              <Input
                label="International driving license date"
                desc="Enter the date of International certificate"
                placeholder="John"
                className="bg-secondaryPurple py-2.5 px-4 rounded w-[311px] text-black"
              />
              <Input
                onChange={handleLicenseDate}
                value={licenseDate}
                type="date"
                label="International driving license expiration date"
                desc="Enter the date of International certificate"
                placeholder="Enter Date"
                className="text-secondaryGray bg-secondaryPurple py-2.5 px-4 rounded w-[311px] "
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Documents;
