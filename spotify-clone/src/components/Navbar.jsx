import React from 'react'
import leftArrowIcon from "../assets/leftarrow_icon.png"
import rightArrowIcon from "../assets/rightarrow_icon.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 h-8 bg-black p-2 rounded-2xl cursor-pointer' src={leftArrowIcon} alt="" />
                <img onClick={()=>navigate(+1)} className='w-8 h-8 bg-black p-2 rounded-2xl cursor-pointer' src={rightArrowIcon} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] py-1 px-4 rounded-2xl hidden md:block cursor-pointer'>Explore Premium
                </p>
                <p className='bg-black py-1 px-3 rounded-2xl text-white text-[15px] cursor-pointer'>Install App</p>
                <p className='bg-purple-500 text-black k w-7 h-7 rounded-full flex items-center justify-center'>A</p>
            </div>
        </div>
        <div className='flex items-center gap mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl ml-1 cursor-pointer'>Music</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl ml-1 cursor-pointer'>Podcasts</p>

        </div>
    </>
  )
}

export default Navbar