import React, { useState } from "react";

function Categories() {
  const [selected, setSelected] = useState("all");
  const handleSelectedcategory = (category) => {
    setSelected(category);
  };

  return (
    <div className="flex justify-between w-1/2 mt-4 ">
      <p
        className={`pb-4 ${
          selected === "all" ? "border-b-2 border-primaryPurple" : ""
        }`}
        onClick={() => handleSelectedcategory("all")}
      >
        All order
      </p>
      <p
        className={`pb-4 ${
          selected === "cancelled" ? "border-b-2 border-primaryPurple" : ""
        }`}
        onClick={() => handleSelectedcategory("cancelled")}
      >
        Cancelled
      </p>
      <p
        className={` pb-4 ${
          selected === "pending" ? "border-b-2 border-primaryPurple" : ""
        }`}
        onClick={() => handleSelectedcategory("pending")}
      >
        {" "}
        Pending
      </p>
      <p
        className={` pb-4 ${
          selected === "accept" ? "border-b-2 border-primaryPurple" : ""
        }`}
        onClick={() => handleSelectedcategory("accept")}
      >
        {" "}
        Accept
      </p>
    </div>
  );
}

export default Categories;
