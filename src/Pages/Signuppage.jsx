import React from 'react'
import Top from '../components/Top.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Loginsignupbox from '../components/Loginsignupbox.jsx'
import Signupbox from '../components/Signupbox.jsx'

const Signuppage = () => {
  return (
    <div className=''>
      <Loginsignupbox>
        <Signupbox></Signupbox>
      </Loginsignupbox>
    </div>
  )
}

export default Signuppage