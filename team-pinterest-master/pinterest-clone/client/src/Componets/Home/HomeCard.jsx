import React, { useState } from "react";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdCallMade } from "react-icons/md";
import { Link } from "react-router-dom";
//import "./Homecss.css"



const HomeCard = ({imgUrl,name, web, storeLocalStorage,id}) => {
  const [enter, setEnter] = useState(false);

  

  return (
    <div className="mx-1 mb-7 z-10">
      <div 
        className="relative fullScaleContent"
        onMouseEnter={() => {
          setEnter(true);
        }}
        onMouseLeave={() => {
          setEnter(false);
        }}
        
      >
        <Link to={`post/${id}`}> <img
          className="rounded-2xl  h-72 min-w-min"
          src={imgUrl}
          alt="bike"
        />
        </Link>
       
        
        <div className={enter ? "block" : "hidden"}>
          <button onClick={storeLocalStorage} className="btn btn-danger top-3 right-2 rounded-full absolute">
            Save
          </button>
          <div  className="rounded-full flex px-2 py-1 bg-white opacity-80 bottom-2 left-3 absolute">
            <MdCallMade className="text-sm mt-1 mr-1" />
            
            <a className="text-xs" href={web} target="_blank" rel="noreferrer">{name}</a>
            
          </div>
          <button className="rounded-full bg-white text-2xl  opacity-80 bottom-3 right-11 absolute">
            
            <MdOutlineFileUpload/>
          </button>
          <button className="text-3xl text-white rounded-full  opacity-80 bottom-2 right-3 absolute">
          <IoEllipsisHorizontalCircleSharp/> 

          </button>
          
                  
        </div>
        
        
      </div>
    
    </div>
  );
};

export default HomeCard;
