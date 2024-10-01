import React from 'react'

const Breadcrumb = ({first, second, third, fourth, fifth}) => {
  return (
    <div>
      <p><span className='opacity-50'>{first}/{second}</span>/ <span>{third}</span>/<span>{fourth}</span>/<span>{fifth}</span> </p>
    </div>
  )
}

export default Breadcrumb