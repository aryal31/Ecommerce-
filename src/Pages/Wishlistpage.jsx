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
          <div>
          <div className="flex justify-between items-center">
          <Heading date="just for you" textClr="text-black" />
          <Buttonwithoutline text='See All'></Buttonwithoutline>
          </div>
         <div className="flex gap-3 flex-wrap items-center">
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
