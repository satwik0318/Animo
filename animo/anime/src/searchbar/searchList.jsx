import React from 'react'
import "./searchList.css"
const searchList = ({result}) => {
  return (
    <div className='search-list'>
      {result.name}
    </div>
  )
}

export default searchList
