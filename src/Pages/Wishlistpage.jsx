import React from "react";
import Itemcardinwishlist from "../components/features/wishlist/Itemcardinwishlist";
import ItemCardinWishlistSuggestion from "../components/features/wishlist/ItemCardinWishlistSuggestion";
import Heading from "../components/common/Heading";
import Buttonwithoutline from "../components/common/Buttonwithoutline";

const Wishlistpage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[80px]">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <p>Whislist(4)</p>
            <Buttonwithoutline text="Move all to cart" className="p-3" />
          </div>
          <div className="flex gap-3 flex-wrap justify-center items-center pt-2 mt-4">
            <ItemCardinWishlistSuggestion />
            <ItemCardinWishlistSuggestion />
            <ItemCardinWishlistSuggestion />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <Heading date="just for you" textClr="text-black" />
              <Buttonwithoutline
                text="See All"
                className="py-3 px-6"
              ></Buttonwithoutline>
            </div>
            <div className="flex gap-3 flex-wrap items-center justify-center mt-4">
              <Itemcardinwishlist />
              <Itemcardinwishlist />
              <Itemcardinwishlist />
              <Itemcardinwishlist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlistpage;
