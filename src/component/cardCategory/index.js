import React from 'react'
import './style.scss'

const CardCategory = ({title, descript, image, onClick}) => {
  return (
    <div className='text-white bg-white shadow-xl rounded-lg w-[320px] m-2 cursor-pointer' onClick={onClick}>
          <img src={image} alt='thumbnail' className='thumbnail'></img>

          <div className='bg-slate-500 rounded-b-lg p-5'>
            <div className='font-bold text-xl'>{title}</div>
            <div className='max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis'>{descript}</div>
        </div>
    </div>
  )
}

export default CardCategory