
import { useState } from "react"
import { Comments } from "./Comments"
import { AiFillRightCircle } from "react-icons/ai"
import "./Details.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"

export const Details=()=>{
    const [postData, setPostData] = useState({});
    const [show, setShow] = useState(false)
    const { id } = useParams();
    console.log("id", id)
    
    const getPost = async () => {
        const res = await fetch(`https://pinterest-backend8.herokuapp.com/post/get/${id}`)
        const data = await res.json()
        console.log(data)
        setPostData(data)
    }

    useEffect(() => {
        
        getPost(); 
    }, [])
    
    const storeLocalStorage = (item) => {
        if (!JSON.parse(localStorage.getItem("data"))) {
          localStorage.setItem("data", JSON.stringify([]))
        }   
        var data1 = JSON.parse(localStorage.getItem("data"));
        data1.push(item)
        localStorage.setItem("data", JSON.stringify(data1))
      
      }

    return (
        <>
            <Navbar/>
        <div className="mt-10 ">

            <div>
            <div className="product_details p-10">
                 <div className="product_img my-7">
                     <div>
                         <img src={postData.imgUrl} alt="" />
                     </div>
                 </div>
                 <div className="details">
                       <div className="icon_profile_save">
                           <div className="icon flex ">
                               
                           <span class="iconify" data-icon="bi:three-dots"  data-width="30" data-height="30"></span>
                           <span class="iconify" data-icon="bi:upload"  data-width="28" data-height="28"></span>
                           <span class="iconify" data-icon="akar-icons:link-chain" data-width="28" data-height="28"></span>
                           </div>
                           <div className="profile_save ">
                             <button className="profile_button btn btn-outline-success rounded-full">Profile</button>
                                <button onClick={() => {
                                    storeLocalStorage(postData);
                              }} className="btn btn-danger rounded-full ">Save</button>
                           </div>
                       </div>
                        <div className="title mb-7 mt-5">
                            <h1 className="font-bold"> {postData.title}</h1>
                       

                       </div>
                       <div className="description"></div>
                       <div className="profile">
                           <div></div>
                           <div>
                               {/* <button className="follow_button">Follow</button> */}
                           </div>
                       </div>
                       <div className="comments">
                           <div className="comment my-7">
                               <div>
                                   Comments
                               </div>
                               <div onClick={()=>{
                                   setShow(!show)
                               }} className="comments_icon text-xl mt-1">
                                   <AiFillRightCircle/>
                               </div>
                           </div>
                           {show?<Comments/>:null}
                           {/* <Comments/> */}
                       </div>
                 </div>
            </div>
            <div className="more_like_this">
                    More like this
            </div>
<div> <Home/></div>
            </div>
            </div>
            </>
    )
}