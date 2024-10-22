import Breadcrumb from "../components/Breadcrumb";
import Buttonwithoutline from "../components/Buttonwithoutline";
import Cartitemcard from "../components/Cartitemcard";
import CartTotalbox from "../components/CartTotalbox";
import Orangebutton from "../components/Orangebutton";
import Wrapper from "../components/Wrapper";
const CartPage = () => {
  return (
    <Wrapper>
      <div className="container">
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
            <div className="grid grid-cols-4 h-[72px] text-16px items-center shadow">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <Cartitemcard />
            <Cartitemcard />
          </div>

          <div className="flex justify-between mt-6">
            <Buttonwithoutline text="Return to shop"></Buttonwithoutline>
            <Buttonwithoutline text="Update Cart"></Buttonwithoutline>
          </div>

          <div className="flex justify-between mt-8 flex-wrap">
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
        <div />
      </div>
    </Wrapper>
  );
};

export default CartPage;
