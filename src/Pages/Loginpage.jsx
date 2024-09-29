import React from 'react'
import Top from '../components/Top.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Loginsignupbox from '../components/Loginsignupbox.jsx'
import Loginbox from '../components/Loginbox.jsx'

const Loginpage = () => {
  return (
    <div>
      <Top></Top>
      <Navbar></Navbar>
    <Loginsignupbox Logincomponent={Loginbox}></Loginsignupbox>

      <Footer></Footer>
    </div>
  )
}

export default Loginpage