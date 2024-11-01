import React from "react";
import Flashsale from "../components/features/home/Flashsale";
import Line from '../components/common/Line'
import Options from "../components/Options";
import Browsebycategory from "../components/features/home/Browsebycategory";
import Bestsellingproducts from "../components/features/home/Bestsellingproducts";
import Banner from "../components/Layout/Banner";
import Ourproducts from "../components/Ourproducts";
import Featured from "../components/features/home/Featured";
import Servicefeatures from "../components/Servicefeatures";

const Homepage = () => {
  return (
    <div>
      <Options />
      <Flashsale className="md:mt-[100px] mt-[50px]" />
      <Line />
      <Browsebycategory />
      <Line />
      <Bestsellingproducts />
      <Banner />
      <Ourproducts />
      <Featured />
      <div className="md:my-[80px] my-8">
        <Servicefeatures />
      </div>
    </div>
  );
};

export default Homepage;
