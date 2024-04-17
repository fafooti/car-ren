import React from 'react'

function OrderHeader() {
  return (
    <div className="w-full flex items-center px-4 text-sm text-secondaryGray py-6 border-t">
      <div className="w-2/5  flex items-center gap-2 ">
        <input type='checkbox' />
        title
      </div>
      <div className="w-1/5 flex items-center justify-end">
        <p className="max-w-xs">user name</p>
      </div>
      <div className="w-1/5  flex items-center justify-end  ">
        Status
      </div>
      <div className="w-1/5 flex items-center justify-center">Payment</div>
      <div className="w-1/5 flex items-center justify-center">
       Reservation Range
      </div>
      <div className="w-1/5 flex items-center justify-end ">CTA</div>
    </div>
  );
}

export default OrderHeader
