import Breadcrumb from "../components/Breadcrumb";
import Buttonwithoutline from "../components/Buttonwithoutline";
import Cartitemcard from "../components/Cartitemcard";
import CartTotalbox from "../components/CartTotalbox";
import Orangebutton from "../components/Orangebutton";
const CartPage = () => {
  return (
    <div>
      <Breadcrumb
        first="Account"
        second="My Account"
        third="Product"
        fourth="View Cart"
        fifth="CheckOut"
      />
      <div className="flex items-center justify-center flex-col">
        <div className=""></div>
        <div className="w-[1170px]">
          <div className="mb-3">
            <div className="shadow flex justify-between w-[1170px] h-[72px]  text-[16px] mt-[10px] items-center px-3">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
          </div>
          <Cartitemcard />

          <div className="flex justify-between mt-3">
            <Buttonwithoutline text="Return to shop"></Buttonwithoutline>
            <Buttonwithoutline text="Update Cart"></Buttonwithoutline>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex gap-x-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border-black border-[1px] rounded-sm h-[56px] pl-3"
              />
              <div className="mt-4">
                <Orangebutton text="Apply Coupon" />
              </div>
            </div>
            <div>
              <CartTotalbox />
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default CartPage;
