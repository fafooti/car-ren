import AddUser from '@/modules/Users/AddUser'
import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
function index() {
  return (
    <div className=" min-h-screen  flex  ">
      <div className="min-w-[265px] ">
        <Sidebar />
      </div>
      <div className="bg-backgroundWhite  w-full flex flex-col mx-auto">
        <Header />
        <AddUser />
      </div>
    </div>
  );
}

export default index
