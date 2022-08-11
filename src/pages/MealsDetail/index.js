/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDetailMeal } from '../../services/axios'
import './style.scss'

// icon
import home from '../../assets/icon/home.svg'
import path from '../../assets/icon/path.png'

const MealsDetail = (props) => {
  const [allData, setallData] = useState({})
  const [ytVideo, setytVideo] = useState('')
  const dataRecipi = []

  useEffect(() => {
    const getData = async() => {
      const response = await getDetailMeal(props.id_meals);
      const data = response.data.meals[0]
      setallData(data)
      setytVideo(data.strYoutube.replace('watch?v=', 'embed/'))
    }

    getData()
  }, [])

  if (allData) {
    for (let i = 1; i <= 20; i++) {
      if (allData[`strIngredient${i}`] === '') {
        
      } else if (allData[`strIngredient${i}`] === null) {

      }else{
        dataRecipi.push(allData[`strIngredient${i}`])
      }
    }

  }
  
  console.log(allData)

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
        <Link to={'/detail-category'}>
          <div className='mr-3 font-thin'>{props.nama_category}</div>
        </Link>
        <img className='mr-3' src={path} alt='path'></img>
        <div className='mr-3 font-thin text-slate-200'>{allData.strMeal}</div>
      </div>

      <div className='font-semibold text-5xl mt-8 mb-5'>
        {allData.strMeal}
      </div>

      <hr/><br/>

      <div className='mb-10'>
        <div className='flex justify-center items-start flex-col md:flex-row'>

          <div className='w-[100%] md:w-[50%]'>
            <div className='mb-3 font-semibold'>{allData.strArea}</div>
            <img className='bg-cover rounded-lg' src={allData.strMealThumb} alt='thumbnail meals'></img>
          </div>

          <div className='w-[100%] md:w-[50%] pl-4 pt-8'>
            <div className='font-semibold text-2xl mb-4'>Intructions</div>
            <div className='mb-5'>{allData.strInstructions}</div>
            <div className='font-semibold text-2xl mb-4'>Recipes</div>
            {
              dataRecipi.map((res, index) => 
              <div key={index + 'datarecipi'}>
                - {res}
              </div>
              )
            }
          </div>

        </div>
      </div>

      <div className='mb-10 flex justify-center flex-col items-center'>
        <div className='font-semibold text-2xl mb-4'>Tutorial</div>
        <iframe className='myVideo md:w-[500px] md:h-[280px] lg:w-[700px] lg:h-[400px]' samesite={'none'} src={ytVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

const reduxState = (state) => ({
  id_meals: state.id_meals,
  nama_category: state.nama_category
})

export default connect(reduxState, null)(MealsDetail)