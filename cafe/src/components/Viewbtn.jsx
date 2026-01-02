import React, { useNavigate } from 'react'
import coffee from '../assets/Contact/coffee.png'
function view({navigate}) {
    const navigator=useNavigate();
  return (
    <div className='flex justify-center items-center m-5 ' onClick={()=>{navigator({navigate})}}>
        <button className="md:w-[173px] md:h-[53px] w-[123px] h-[43px] rounded-[12.82px] bg-[#835C3B] hover:bg-[#a95a14] flex justify-around items-center relative hover:drop-shadow-[0_4px_10px_rgb(169,79,6)] transition-all duration-300 ease-in-out">
          <span className='md:w-[78] md:h-[43px] font-normal text-white md:text-[35px] text-[25px] flex items-center justify-center salsa-regular absolute md:left-8 md:top-1 left-5'>view</span>
          <span className='rotate-[-50deg] absolute md:right-2 right-[10px]'><img className='md:w-[55px] w-[40px] h-auto' src={coffee} alt={coffee} /></span>
        </button>
    </div>
  )
}

export default view