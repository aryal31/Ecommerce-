import React from "react";
import Loginsignupbox from "../components/features/loginandsignup/Loginsignupbox.jsx";
import Loginbox from "../components/features/loginandsignup/Loginbox.jsx";
const Loginpage = () => {
  return (
    <div>
      <Loginsignupbox>
        <Loginbox />
      </Loginsignupbox>
    </div>
  );
};

export default Loginpage;
