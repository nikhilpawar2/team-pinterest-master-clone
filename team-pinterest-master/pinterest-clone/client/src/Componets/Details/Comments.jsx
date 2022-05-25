import { useEffect } from "react"
import { useState } from "react"

import "./Comments.css"

export const Comments =()=>{

   const [comment,setComment]=useState(["djdj"])
   var data=["a","aan"]
   const addComment=()=>{
    
   var c= document.getElementById("inputC").value
   setComment(c);

   data.push(comment);
   console.log(c)
   data.push(c);
    console.log(data)
    localStorage.setItem("comment",JSON.stringify(data))

   }

    return (
        <div>
            <div className="mb-7">
                Share feedback, ask question or give a high five
            </div>
            <div className="comment_box">
                <div className="comment_img">
                  <img src="https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351__340.jpg" alt="profile-img" />
                </div>
                 <div className="comment_input">
                 <input id="inputC"  type="text" placeholder="Add a comment" />
                 </div>
                
                 
            </div>
        </div>
    )
}