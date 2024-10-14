import React from "react";
import Itemcardinwishlist from "../components/Itemcardinwishlist";
import ItemCardinWishlistSuggestion from "../components/ItemCardinWishlistSuggestion";
import Heading from "../components/Heading";
import Buttonwithoutline from "../components/Buttonwithoutline";
ItemCardinWishlistSuggestion;

const Wishlistpage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[80px] w-[1170px] h-[984px]">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <p>Whislist(4)</p>
            <Buttonwithoutline text='Move all to cart'/>
          </div>
          <div className="flex gap-3 flex-wrap">
          <ItemCardinWishlistSuggestion />
          <ItemCardinWishlistSuggestion />

          </div>
          <div className="flex justify-between items-center">
          <Heading date="just for you" textClr="text-black" />
          <button className="items-center justify-center h-[56px] w-[150px] border-black border-[1px] rounded-[3px]">See All</button>
          </div>

          {/* 
            <div className="flex items-center justify-between">
              <div className="h-[40px] w-[20px] aspect-[1/2] bg-[#DB4444] rounded-[4px]"></div>
              <div className="text-[16px]  pl-[16px] capitalize">
                Just For You
              </div>
              <div>
                <button>See All</button>
              </div>
            </div> */}

         <div className="flex gap-3 flex-wrap">
         <Itemcardinwishlist />
         <Itemcardinwishlist />
         </div>
          
        </div>
      </div>
    </div>
  );
};

export default Wishlistpage;
