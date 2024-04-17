import React, { useState } from "react";

function DropDown({ title, list,icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickItem, setClickedItem] = useState(null);
  
  const handleOpenList = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickItem = (index) => {
  setClickedItem(index);
  };
  return (
    <div className=" w-full ">
      <div className="flex">
        <img src={icon.src} />
        <div
          className="text-white flex  w-full items-center justify-between px-2.5"
          onClick={handleOpenList}
        >
          <p>{title}</p>
          <span>{isOpen ? "^" : "v"}</span>
        </div>
      </div>

      {isOpen && (
        <ul className={`   h-0  overflow-hidden ${isOpen ? "h-fit" : ""} `}>
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClickItem(index)}
              className={` my-2 rounded text-sm  p-2 ${
                clickItem === index
                  ? "text-white bg-primaryGray "
                  : "text-secondaryGray"
              } w-full `}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
