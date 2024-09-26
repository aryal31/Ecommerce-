import React, { useState } from "react";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Wrapper from "./components/Wrapper";
import Flashsale from "./components/Flashsale";


const App = () => {

  const [category, setcategory] = useState('');

  return <div>

    <Top></Top>
    <Navbar category={category} setcategory={setcategory}></Navbar>
    <Options></Options>
    <Flashsale></Flashsale>
    <Footer></Footer>

  </div>;
};

export default App;
