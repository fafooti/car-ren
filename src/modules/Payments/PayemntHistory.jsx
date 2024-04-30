import React from "react";
import Button from "@/components/Button/Button";
import cta from "/public/cars/cta.svg"
import tickIcon from "/public/icons/tick.svg"
function PayemntHistory({ paymentHistory }) {
    const statusColor=[
        
    ]
  return (
    <div className="   overflow-x-auto border ">
      <table className="w-full text-sm text-left   ">
        <thead className="text-xs  ">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Payment Title
            </th>
            <th scope="col" className="px-6 py-3">
              Payement Date
            </th>
            <th scope="col" className="px-6 py-3 ">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Cost
            </th>
            <th scope="col" className="px-6 py-3 ">
              Payment Type
            </th>
            <th scope="col" className="px-6 py-3 ">
              Uer Name
            </th>
            <th scope="col" className="px-6 py-3">
              CTA
            </th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((item) => (
            <tr className="bg-white  ">
              <th
                scope="row"
                className=" px-6 flex gap-2 flex-col py-4 whitespace-nowrap"
              >
                <p className="">{item.title}</p>
                <span className="text-gray-300 text-xs"> {item.desc}</span>
              </th>
              <td className="px-6">{item.date}</td>
              <td className="px-6 text-xs  ">
                <Button
                  className={`px-4  min-w-[116px] text-white bg-${item.color} py-1`}
                >
                  <img src={tickIcon.src} />
                  {item.status}
                </Button>
              </td>
              <td className="px-6">{item.cost}</td>
              <td className="px-6">{item.paymentType}</td>
              <td className="px-6">{item.username}</td>
              <td className="px-6">
                <img src={cta.src} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PayemntHistory;
