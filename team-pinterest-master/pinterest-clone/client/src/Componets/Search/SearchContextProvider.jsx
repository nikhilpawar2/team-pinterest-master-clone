import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const searchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([])
  
  async function handelSearch(keyword) {
    console.log("handelSearch working")
    const res = await fetch(`https://pinterest-backend8.herokuapp.com/post/key/${keyword}`)
    //https://pinterest-backend8.herokuapp.com/key/dog

    const data = await res.json();
    console.log("context",data)
    setSearchData(data)
  }
  useEffect(() => {
    handelSearch()
  },[])
  
return (
    <searchContext.Provider value={{searchData, handelSearch}}>{children}</searchContext.Provider>
)
}
