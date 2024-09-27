import React, { useState } from "react";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Wrapper from "./components/Wrapper";
import Flashsale from "./components/Flashsale";
import Itemcard from "./components/Itemcard";
import Viewallproductsbutton from "./components/Viewallproductsbutton";
import Browsebycategory from "./components/Browsebycategory";
import Line from "./components/Line";
import Bestsellingproducts from "./components/Bestsellingproducts";
import Ourproducts from "./components/Ourproducts";
import Featured from "./components/Featured";
import Viewallbutton from "./components/Viewallbutton";




const App = () => {

  const [category, setcategory] = useState('');

  return <div>

    <Top/>
    <Navbar category={category} setcategory={setcategory}/>
    <Options/>
    <Flashsale/>
    
    <Viewallproductsbutton/>
    <Line/>
    <Browsebycategory/>
    <Line></Line>
    <Bestsellingproducts/>
    <Ourproducts/>
    <Featured/>
    <Footer/>
    
    
  </div>;
};

export default App;
