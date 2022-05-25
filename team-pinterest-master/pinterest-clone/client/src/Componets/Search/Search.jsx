import React from 'react'
import { useContext } from 'react'
import HomeCard from '../Home/HomeCard';
import Navbar from '../Navbar/Navbar';
import { searchContext } from './SearchContextProvider'

const Search = () => {
  
    const { searchData } = useContext(searchContext);
    console.log("searchData",searchData);

  return (
    <>
    <Navbar/>
      <div className='flex flex-wrap '>
          {searchData.map((item) => {
              return <HomeCard imgUrl={item.imgUrl} name={item.title.substr(0,4)+"..."} web={ item.webLink}/>
          })}
          
      
      </div>
      </>
  )
    
      
}

export default Search
