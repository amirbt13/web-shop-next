"use client";
const CartPayment = () => {
  return (
    <div className=" dark:text-white sticky bottom-0 left-0 border-t border-gray-300 w-full rounded-t-xl py-4  px-2 flex flex-col gap-6  shadow-[0_-4px_6px_1px] shadow-blue-800 z-40 bg-slate-800">
      <div className="flex">
        <h6>Total Cost: </h6>
        <p></p>
      </div>
      <div className="flex justify-center gap-2">
        <button className=" bg-green-600 py-2 px-4 rounded">Purchase</button>
      </div>
    </div>
  );
};

export default CartPayment;
