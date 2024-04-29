import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Navigations from "@/modules/Orders/Navigations";
import CarSelection from "@/modules/Orders/CarSelection";
import CarDocument from "@/modules/Orders/CarDocument";
const details = [
  {
    name: "pick-up Date",
    desc: "Enter the date of reciving",
    placeholdet: "select start date",
  },
  {
    name: "return Date",
    desc: "Enter the date of return car",
    placeholdet: "select end date",
  },
];
function AddOrder() {
  return (
    <div className=" min-h-screen  flex  ">
      <div className="min-w-[265px] ">
        <Sidebar />
      </div>
      <div className="bg-backgroundWhite w-full flex flex-col mx-auto">
        <Header />
        <div className=" 1440:w-[1114px] w-11/12 mx-auto ">
          <Navigations />
          <CarSelection />
          <CarDocument />
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
