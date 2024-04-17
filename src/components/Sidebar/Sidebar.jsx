import React from "react";
import DropDown from "./DropDown";
import carIcon from "/public/icons/car.svg";
import Button from "../Button/Button";
import logo from "/public/icons/carLogo.svg";
import Image from "next/image";
import spinner from "/public/icons/spinner.svg";
import Link from "next/link";
import order from "/public/icons/order.svg";
import client from "/public/icons/client.svg";
import information from "/public/icons/information.svg";
import financial from "/public/icons/financialSelector.svg";
import comment from "/public/icons/comment.svg";
import siteManagement from "/public/icons/SiteManagment.svg";
import staffMangement from "/public/icons/staffManagment.svg";
import report from "/public/icons/report.svg";

const cars = ["All Cars", "All Meta Car", "Reserved cars"];
const orderList = ["All Orders", "Pending Orders"];
function Sidebar() {
  return (
    <div className="bg-primaryBlack h-full whitespace-nowrap  pb-20 w-full flex flex-col gap-2 ">
      <div className="border-b border-dashed w-full flex justify-center py-8 border-secondaryPurple">
        <Image src={logo} />
      </div>

      <div className="text-sm flex flex-col gap-8 mt-4 ml-8 mr-6 ">
        <div className="text-white   text-xl flex gap-2.5 ">
          <Image src={spinner} />
          Dashboard
        </div>
        <DropDown title="Cars" list={cars} icon={carIcon} />

        <DropDown title="Order list" list={orderList} icon={order} />
        <DropDown title="Clients" list={cars} icon={client} />
        <DropDown title="Basic Infromation" list={cars} icon={information} />
        <DropDown title="Financial selector" list={cars} icon={financial} />

        <Link className="flex text-white gap-2.5" href="/">
          <Image src={comment} />
          Comment
        </Link>

        <Link className="flex text-white gap-2.5" href="/">
          <Image src={siteManagement} />
          Site Management
        </Link>
        <Link className="flex text-white gap-2.5" href="/">
          <Image src={staffMangement} />
          Staff Management
        </Link>
        <Link className="flex text-white gap-2.5" href="/">
          <Image src={report} />
          Report
        </Link>
      </div>
      <div className="flex justify-center px-16 mt-16 py-6 border-y border-dashed border-secondaryPurple">
        <Button
          icon={carIcon}
          className={`bg-primaryBlue px-8 py-2 text-white`}
        >
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
