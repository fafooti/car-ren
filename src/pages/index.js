import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import OrderList from "@/modules/Orders/OrderList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` min-h-screen  flex   ${inter.className}`}>
      <div className="min-w-[265px] ">
        <Sidebar />
      </div>

      <div className=" bg-backgroundWhite  w-full flex flex-col mx-auto">
        <Header />
        <OrderList />
      </div>
    </main>
  );
}
