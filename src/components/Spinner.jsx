import React from 'react'

function Spinner() {
  return (
    <div className='h-screen w-full flex justify-center items-center' >
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner
