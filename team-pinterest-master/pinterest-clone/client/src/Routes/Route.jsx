import React from 'react'
import { Routes,Route, useParams } from 'react-router-dom'
import { Details } from '../Componets/Details/Details'
import Home from '../Componets/Home/Home'
import HomeNav from '../Componets/Home/HomeNav'
import Home_Nab from '../Componets/Home/HomeNav'
import { Main } from '../Componets/Main-Page/main'
import { Navbarm } from '../Componets/Main-Page/Navbarm'

import Navbar from '../Componets/Navbar/Navbar'
import { Profile } from '../Componets/profile/profile'

import Search from '../Componets/Search/Search'
import { About } from '../Componets/Today/About'


const Routers = () => {

  const  main  = useParams();
  console.log("params", main)
 

  return (
    <div>
     
      <Routes>
        <Route path='/nabar' element={<Navbar/>}></Route>
        <Route path="/home" exact element={<HomeNav/>}></Route>
        <Route path="/today" exact element={<About />}></Route>
        <Route path="/" exact element={<HomeNav/>}></Route>
        <Route path="/search" exact element={<Search />}></Route>
        <Route path="/post/:id" exact element={<Details/>}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/:main" exact element={<Main />}></Route>
        
      </Routes>
      
    </div>
  )
}

export default Routers
