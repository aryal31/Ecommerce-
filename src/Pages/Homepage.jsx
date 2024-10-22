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
      <div className="my-[40px]"><Servicefeatures /></div>
    </div>
  );
};

export default Homepage;
