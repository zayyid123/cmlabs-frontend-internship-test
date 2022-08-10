import React from 'react'
import { connect } from 'react-redux'

const Home = (props) => {

  const handleClick = (data) => {
    props.changedata(data)
  }

  return (
    <div>
      <h1>Home {props.data}</h1>

      <button onClick={() => handleClick('zayyid')}>click me</button>
    </div>
  )
}

const reduxState = (state) => ({
  data: state.data
})

const reduxDispatch = (dispatch) => ({
  changedata: (noData) => dispatch({ type: 'CHANGE_DATA', value: noData })
})

export default connect(reduxState, reduxDispatch)(Home)