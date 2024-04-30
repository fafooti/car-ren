import PayemntHistory from '@/modules/Payments/PayemntHistory';
import React from 'react'
const paymentHistory = [
  {
    title: "Audi Q4 Sportback e-tron",
    desc: "Payment ID: DM-1234567",
    date: "2022/10/09",
    status: "Rejected",
    cost: "1200 dirhams",
    paymentType: "online",
    username: "fateme amiri",
    cta: "",
    color: "primaryOrange",
  },
  {
    title: "Audi Q4 Sportback e-tron",
    desc: "Payment ID: DM-1234567",
    date: "2022/10/09",
    status: "Rejected",
    cost: "1200 dirhams",
    paymentType: "online",
    username: "fateme amiri",
    cta: "",
    color: "primaryOrange",
  },
  {
    title: "Audi Q4 Sportback e-tron",
    desc: "Payment ID: DM-1234567",
    date: "2022/10/09",
    status: "process",
    cost: "1200 dirhams",
    paymentType: "online",
    username: "fateme amiri",
    cta: "",
    color: "secondaryGray",
  },
  {
    title: "Audi Q4 Sportback e-tron",
    desc: "Payment ID: DM-1234567",
    date: "2022/10/09",
    status: "accepted",
    cost: "1200 dirhams",
    paymentType: "online",
    username: "fateme amiri",
    cta: "",
    color: "primaryGreen",
  },
  {
    title: "Audi Q4 Sportback e-tron",
    desc: "Payment ID: DM-1234567",
    date: "2022/10/09",
    status: "rejected",
    cost: "1200 dirhams",
    paymentType: "online",
    username: "fateme amiri",
    cta: "",
    color: "primaryOrange",
  },
  {
    title: "Audi Q4 Sportback e-tron",
    desc: "Payment ID: DM-1234567",
    date: "2022/10/09",
    status: "accepted",
    cost: "1300 dirhams",
    paymentType: "online",
    username: "fateme amiri",
    cta: "",
    color: "primaryGreen",
  },
];
function Index() {
  return (
    <div className="bg-backgroundWhite w-full h-screen py-10">
      <div className="1440:w-[1114px] w-11/12 mx-auto ">
        <PayemntHistory paymentHistory={paymentHistory} />
      </div>
    </div>
  );
}

export default Index;
