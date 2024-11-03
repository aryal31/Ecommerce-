import React from 'react'

import Loginsignupbox from '../components/features/loginandsignup/Loginsignupbox.jsx'
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