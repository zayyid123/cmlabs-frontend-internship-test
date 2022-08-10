import React from 'react'
import './style.scss'

const Navbar = () => {
  return (
    <div className='shadow-sm p-2 sticky top-0 z-2 bg-white mb-5'>
      <div className='max-w-[1280px] mx-auto flex items-center justify-between px-2'>
        <div className='logoNavbar font-bold text-2xl'>mealapp</div>

        <div className='flex gap-4'>
          <div className='cursor-pointer hover:text-slate-300 transition-colors'>Home</div>
          <div className='cursor-pointer hover:text-slate-300 transition-colors'>Foods</div>
          <div className='cursor-pointer hover:text-slate-300 transition-colors'>Ingredients</div>
          <div className='cursor-pointer hover:text-slate-300 transition-colors'>Local Culinary</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar