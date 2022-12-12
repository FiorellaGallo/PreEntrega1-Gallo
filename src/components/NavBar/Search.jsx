import React, { useState, useContext } from 'react'
import './NavBar.css';
import { searchContext } from '../../Context/searchContext';

function Search() {
  const [searchProduct, setSearchProduct] = useState(false);
  const { setSearchItem } = useContext(searchContext)

  function handleChange(event) {
    if(event.target.value === "") return  setSearchItem("")
    setSearchProduct(event.target.value);

  }

  function handleEnter(event) {
    if (event.key === 'Enter') {
      setSearchItem(searchProduct)
    }


  }

  return (
    <div >
      <div class="input-group flex-nowrap" >
        <input id="magnifyingGlass" type="text" onKeyDown={handleEnter} name="search" placeholder="Search.." onChange={handleChange}/>
        <span class="input-group-text" id="addon-wrapping"><svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-search" viewBox="0 0 20 20">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg></span>
      </div>
    </div>
  )
}

export default Search