import Breadcrumb from "../components/common/Breadcrumb";
import Buttonwithoutline from "../components/common/Buttonwithoutline";
import Cartitemcard from "../components/features/cart/Cartitemcard";
import CartTotalbox from "../components/features/cart/CartTotalbox";
import Orangebutton from "../components/common/Orangebutton";
import Wrapper from "../components/common/Wrapper";
const CartPage = () => {
  return (
    <Wrapper>
      <div className="container p-2 md:p-0">
        {/* // container property sets 100% width of the div */}
        <Breadcrumb
          first="Account"
          second="My Account"
          third="Product"
          fourth="View Cart"
          fifth="CheckOut"
        />
        <div className="mt-8">
          <div className="">
            <div className="grid grid-cols-4 h-[72px] text-[13px] md:text-[16px] items-center shadow">
              <p className="text-center">Product</p>
              <p className="text-center">Price</p>
              <p className="text-center">Quantity</p>
              <p className="text-center">Subtotal</p>
            </div>
            <Cartitemcard />
            <Cartitemcard />
          </div>

          <div className="flex justify-between mt-6">
            <Buttonwithoutline
              text="Return to shop"
              className="w-[120px] h-[40px]"
            ></Buttonwithoutline>
            <Buttonwithoutline
              text="Update Cart"
              className="w-[120px] h-[40px]"
            ></Buttonwithoutline>
          </div>

          <div className="flex justify-between mt-8 flex-wrap gap-1">
            <div className="flex gap-x-3 mb-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border-black border-[1px] rounded-sm w-[130px] md:w-full md:h-[56px] pl-3"
              />
              <div className="mt-4">
                <Orangebutton
                  text="Apply Coupon"
                  className="md:h-[40px] md:w-[150px] h-[40px] w-[100%]"
                />
              </div>
            </div>
            <div>
              <CartTotalbox />
            </div>
          </div>
        </div>
        <div />
      </div>
    </Wrapper>
  );
};

export default CartPage;
