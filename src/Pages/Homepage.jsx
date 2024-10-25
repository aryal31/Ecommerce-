import React from "react";
import Flashsale from "../components/Flashsale";
import Line from "../components/Line";
import Options from "../components/Options";
import Browsebycategory from "../components/Browsebycategory";
import Bestsellingproducts from "../components/Bestsellingproducts";
import Banner from "../components/Banner";
import Ourproducts from "../components/Ourproducts";
import Featured from "../components/Featured";
import Servicefeatures from "../components/Servicefeatures";
import Itemcard from "../components/Itemcard";

const Homepage = () => {
  return (
    <div>
      <Options />
      <Flashsale />
      <Line />
      <Browsebycategory />
      <Line />
      <Bestsellingproducts />
      <Banner />
      <Ourproducts />
      <Featured />
      <div className="md:my-[80px] my-8"><Servicefeatures /></div>
    </div>
  );
};

export default Homepage;
