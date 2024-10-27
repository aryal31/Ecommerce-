import Orangebutton from "./Orangebutton";

const CartTotalbox = () => {
  return (
    <div className="border-[1.5px] border-black rounded-md flex flex-col w-[400px] md:w-[470px] md:h-[324px] p-5">
      <div className="text-[20px] font-semibold mb-[24px]">Cart Total</div>
      <div className="flex justify-between">
        <p className="text-[16px]  md:text-[16px]">Subtotal:</p>
        <p>$175</p>
      </div>
      <div className="bg-[#D9D9D9] w-full h-[1.5px] my-[16px]"></div>
      <div className="flex justify-between">
        <p>Shipping:</p>
        <p>Free</p>
      </div>
      <div className="bg-[#D9D9D9] w-full h-[1.5px] my-[16px]"></div>
      <div className="flex justify-between my-[16px]">
        <p>Total:</p>
        <p>$1750</p>
      </div>
      <div className="items-center justify-center flex">
      <Orangebutton text='Proceed to Checkout '/>
      </div>
    </div>
  );
};

export default CartTotalbox;
