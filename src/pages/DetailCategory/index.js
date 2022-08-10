/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { filterCategory } from '../../services/axios'

// icon
import home from '../../assets/icon/home.svg'
import path from '../../assets/icon/path.png'
import CardCategory from '../../component/cardCategory'

const DetailCategory = (props) => {
  const navigate = useNavigate()
  const [allData, setallData] = useState([])
  const [valueSearch, setvalueSearch] = useState('')

  useEffect(() => {
    if (props.nama_category === '') {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    const getData  = async() => {
      const response = await filterCategory(props.nama_category)
      setallData(response.data.meals)
    }
    
    getData()
  }, [])

  const handleChange = (e) => {
    setvalueSearch(e.target.value)
  }
  
  const handleClick = () => {
    navigate('/meals-detail')
  }

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
        <input onChange={handleChange} className='mt-6 w-[40%] bg-slate-200 p-2 rounded-lg' placeholder='Find your categories'></input>
      </div>

      <div className='flex flex-wrap items-start justify-center'>
        {
          allData
          .filter((data) => data.strMeal.toLowerCase().includes(valueSearch.toLowerCase()))
          .map((res, index) => 
            <CardCategory title={res.strMeal} image={res.strMealThumb} descript={null} onClick={handleClick}/>
          )
        }
      </div>
    </div>
  )
}

const reduxState = (state) => ({
  nama_category: state.nama_category
})

export default connect(reduxState, null)(DetailCategory)