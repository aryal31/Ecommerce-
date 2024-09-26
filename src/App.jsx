import React, { useState } from "react";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Footer from "./components/Footer";


const App = () => {

  const [category, setcategory] = useState('');

  return <div>
    <Top></Top>
    <Navbar category={category} setcategory={setcategory}></Navbar>
    <Options></Options>
    <Footer></Footer>
  </div>;
};

export default App;
