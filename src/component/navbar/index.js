import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

// icon
import menu from '../../assets/icon/menu.svg'

const Navbar = () => {
  const navMenu = document.querySelector('.navMenu')

  const handleClick = () => {
    if (navMenu.className === 'navMenu show') {
      navMenu.classList.remove('show')
    }else{
      navMenu.classList.add('show')
    }
  }

  return (
    <div className='shadow-sm p-2 sticky top-0 z-2 bg-white mb-5'>
      <div className='max-w-[1280px] mx-auto flex items-center justify-between px-2'>
        <Link to={'/'}>
          <div className='logoNavbar font-bold text-2xl'>mealapp</div>
        </Link>

        <div className='navMenu'>
          <Link to={'/'} onClick={handleClick}>
            <div className='cursor-pointer hover:text-slate-300 transition-colors'>Home</div>
          </Link>
          <a href='https://www.themealdb.com/api.php' onClick={handleClick}>Api</a>
        </div>

        <div className='lt:hidden' onClick={handleClick} >
          <img className='w-[20px] cursor-pointer' src={menu} alt='menu icon'></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar