import React from "react";
import HomeCard from "./HomeCard";
import { BsPlusLg } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Home = () => {
  const [data, setData] = useState([]);

  // const api_key="563492ad6f91700001000001e9fb2073b9d94fb88ac11114a060be83"

  // const getData = async() => {
  //   const res = await fetch("https://api.pexels.com/v1/curated?page=2&per_page=60", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization:api_key,
  //     }
  //   })

  //   const imgData = await res.json()
  //   //setData(imgData.photos)
  //   //console.log("api",imgData.photos)
  // };
  const storeLocalStorage = (item) => {
    if (!JSON.parse(localStorage.getItem("data"))) {
      localStorage.setItem("data", JSON.stringify([]))
    }   
    var data1 = JSON.parse(localStorage.getItem("data"));
    data1.push(item)
    localStorage.setItem("data", JSON.stringify(data1))
  
  }
  const homeData = async () => {
    
    const res = await fetch("https://pinterest-backend8.herokuapp.com/post/get")
    const resData = await res.json();
    setData(resData);
    
  }
  useEffect(() => {

    homeData()
    //getData()
  }, [])
  

  return (
    <>
      {/* <Navbar/> */}
      <div className="flex flex-wrap justify-center  mt-10">
      
      {data.map((item) => {

        return <HomeCard storeLocalStorage={() => { storeLocalStorage(item) }} key={item._id} imgUrl={item.imgUrl} name={item.title.substr(0, 5) + "..."} web={item.webLink} id={ item._id}/>
        
         ;
      })}
      <div className="fixed bottom-16 right-10 bg-white z-20 p-3 rounded-full">
        <Link to="newpin"><BsPlusLg /> </Link>
        
      </div>
      <div className="fixed bottom-3 right-10 bg-white z-20 p-3 rounded-full">
        <BsQuestionLg />
      </div>
    </div>
    </>
    
  );
};

export default Home;
