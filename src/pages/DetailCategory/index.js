import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// icon
import home from '../../assets/icon/home.svg'
import path from '../../assets/icon/path.png'

const DetailCategory = (props) => {
  return (
    <div className='container'>
      <div className='flex items-center justify-start'>
        <Link to={'/'}>
          <img src={home} alt='home svg' className='w-[15px] mr-3' ></img>
        </Link>
        <Link to={'/'}>
          <div className='mr-3 font-thin'>Home</div>
        </Link>
        <img className='mr-3' src={path} alt='path'></img>
        <div className='mr-3 font-thin text-slate-200'>{props.nama_category}</div>
      </div>

      <div className='mt-8 mb-8 flex justify-center items-center flex-col'>
        <div className='font-semibold text-5xl text-center'>{props.nama_category} Meals</div>
        <input className='mt-6 w-[40%] bg-slate-200 p-2 rounded-lg' placeholder='Find your categories'></input>
      </div>
    </div>
  )
}

const reduxState = (state) => ({
  nama_category: state.nama_category
})

export default connect(reduxState, null)(DetailCategory)