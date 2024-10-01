import React from "react";
import Itemcardinwishlist from "../components/Itemcardinwishlist";
import ItemCardinWishlistSuggestion from "../components/ItemCardinWishlistSuggestion";
ItemCardinWishlistSuggestion;

const Wishlistpage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[80px] w-[1170px] h-[984px]">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <p>Whislist(4)</p>
            <button className="border-black border-[1px] w-[223px] h-[56px]">
              Move All To Bag
            </button>
          </div>
          <ItemCardinWishlistSuggestion />

          <div className="flex">
            <div className="flex items-center">
              <div className="h-[40px] w-[20px] aspect-[1/2] bg-[#DB4444] rounded-[4px]"></div>
              <div className="text-[16px]  pl-[16px] capitalize">
                Just For You
              </div>
              <div>
                <button>See All</button>
              </div>
            </div>
          </div>

          <Itemcardinwishlist />
        </div>
      </div>
    </div>
  );
};

export default Wishlistpage;
