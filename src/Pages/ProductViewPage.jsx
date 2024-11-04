import React from "react";
import ProductView from "../components/features/product/ProductView";
import Heading from "../components/common/Heading";
import Itemcard from "../components/features/product/Itemcard";

const ProductViewPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-3">
        <ProductView></ProductView>
      </div>
      <div className="mt-5">
        <Heading date="Related Items"></Heading>
        <div className="flex gap-2 flex-wrap">
          <Itemcard />
          <Itemcard />
          <Itemcard />
          <Itemcard />
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
