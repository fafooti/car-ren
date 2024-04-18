
import Categories from './Categories';
import OrderCard from './OrderCard'
import OrderHeader from './OrderHeader';

function OrderList() {
  return (
    <div className="1440:w-[1114px] w-11/12 bg-white my-20 flex h-full flex-col mx-auto  ">
     <Categories/>
      <OrderHeader />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  ); 
}
export default OrderList
