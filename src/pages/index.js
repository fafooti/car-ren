import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import OrderList from "@/module/Orders/OrderList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` min-h-screen  flex bg-backgroundWhite   ${inter.className}`}
    >
      <Sidebar />
      <div className="w-full  flex flex-col">
        <Header />
        <OrderList />
      </div>
    </main>
  );
}
