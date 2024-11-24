import React from 'react'
import './SearchInput.css'
function SearchInput() {
  return (
    <div className="col">

        <div className="row x-search-input align-items-center">

            <div className="col-1">
                <i className="fa-solid fa-magnifying-glass" style={{color: 'rgb(113, 113, 113)'}}></i>
            </div>

            <div className="col-10">
                <input type="text" className='x-search-text' placeholder='Ara'/>
            </div>

        </div>
    </div>
  )
}

export default SearchInput