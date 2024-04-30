import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Navigations from "@/modules/Orders/Navigations";
import CarSelection from "@/modules/Orders/CarSelection";
import CarDocument from "@/modules/Orders/CarDocument";
import PayemntHistory from "@/modules/Payments/PayemntHistory";
const details = [
  {
    name: "pick-up Date",
    desc: "Enter the date of reciving",
    placeholder: "select start date",
  },
  {
    name: "return Date",
    desc: "Enter the date of return car",
    placeholder: "select end date",
  },
];
const returnLocation = [
  {
    name: "Pickup Locatoin",
    desc: "Enter the Location of receiving the car",
    placeholder: "Select Location",
  },
  {
    name: "Select time",
    desc: "Enter the time of receiving the car",
    placeholder: "Select time",
  },
];
const additionalItems = [
  {
    name: "Baby seat ",
    desc: "Travel With Your baby safly and security",
    placeholder: "AED 2.000",
  },

  {
    name: "Baby seat ",
    desc: "Travel With Your baby safly and security",
    placeholder: "AED 2.000",
  },
  {
    name: "Baby seat ",
    desc: "Travel With Your baby safly and security",
    placeholder: "AED 2.000",
  },
  {
    name: "Baby seat ",
    desc: "Travel With Your baby safly and security",
    placeholder: "AED 2.000",
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
          <CarDocument title={"Period Date"} inputDetails={details} />
          <CarDocument
            title={"Pic-Up Location"}
            inputDetails={returnLocation}
          />
          <CarDocument
            title={"Return Location"}
            inputDetails={returnLocation}
          />
          <CarDocument
            title={"Additional items per Day"}
            inputDetails={additionalItems}
          />
        
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
