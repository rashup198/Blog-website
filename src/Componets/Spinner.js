import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className=' flex flex-col justify-center items-center h-screen w-full'>
      <div class="custom-loader"></div>
      <p className='font-bold text-2xl mt-5'>Loading</p>
    </div>
  )
}

export default Spinner
