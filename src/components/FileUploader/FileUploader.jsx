import React from 'react'
import Input from "@/components/Input/Input";
import Image from 'next/image';
import fileIcon from "/public/icons/fileIcon.svg";
function FileUploader({title}) {
  return (
    <div>
      <div className=" w-full   ">
        <div className="w-full flex flex-col gap-3">
          <p className="font-semibold">{title}</p>
          <p className="text-secondaryGray text-sm">
            The aspect ratio should be 3:2 and Transparent Picture
          </p>
          <label
            for="doc"
            class="flex flex-col items-center p-4  rounded-3xl justify-center  bg-secondaryPurple cursor-pointer w-[328px] h-[160px]"
          >
            <Image width={24} height={24} class=" " src={fileIcon} alt="" />.
            <div class="space-y-2 ">
              <h4 class="text-sm font-semibold text-gray-700">
                + Select (Webp, PNG)
              </h4>
            </div>
            <Input
              id="doc"
              hidden={true}
              type="file"
              className={`bg-secondaryPurple py-2.5 focus:outline-none px-4 rounded w-[328px] h-[160px] text-secondaryGray`}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default FileUploader
