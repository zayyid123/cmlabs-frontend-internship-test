import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardCategory from '../../component/cardCategory'
import { getAllCategories } from '../../services/axios'
import './style.scss'

const Home = (props) => {
  const [allData, setallData] = useState([])
  const [valueSearch, setvalueSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async() => {
      const response = await getAllCategories()
      setallData(response.data.categories)
    }

    getData()
  }, [])
  
  const handleChange = (e) => {
    setvalueSearch(e.target.value)
  }

  const handleClick = (nama_category) =>{
    props.changeNamaCategory(nama_category)
    navigate('/detail-category')
  }

  return (
    <div className='container'>

      <div className='bg-gradient-to-r from-sky-500 to-indigo-500 text-center rounded-xl h-[300px] text-white flex justify-center items-center flex-col'>
        <div className='logo text-6xl'>mealapp</div>
        <div className='text-xl'>~ Online Recipi ~</div>
        <div className='text-sm font-thin'>Lets find some recipi online</div>
      </div>

      <div className='flex justify-center items-center flex-col my-7'>
        <div className='font-semibold text-xl titleSearch'>Search your categories</div>
        <input onChange={handleChange} className='mt-4 w-[40%] bg-slate-200 p-2 rounded-lg' placeholder='Find your categories'></input>
      </div>

      <div className='flex flex-wrap items-center justify-center'>
        {
          allData
          .filter((data) => data.strCategory.toLowerCase().includes(valueSearch.toLowerCase()))
          .map((res, index) =>
            <CardCategory key={index} title={res.strCategory} descript={res.strCategoryDescription} image={res.strCategoryThumb} onClick={() => handleClick(res.strCategory)} />
          )
        }
      </div>
    </div>
  )
}

const reduxState = (state) => ({
  nama_category: state.nama_category
})

const reduxDispatch = (dispatch) => ({
  changeNamaCategory: (nama_category) => dispatch({ type: 'CHANGE_NAMA_CATEGORY', value: nama_category })
})

export default connect(reduxState, reduxDispatch)(Home)