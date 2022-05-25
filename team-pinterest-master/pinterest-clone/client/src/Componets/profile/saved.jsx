
import HomeCard from "../Home/HomeCard";
import "./Saved.css"

export const Saved=()=>{

    var saved_data = JSON.parse(localStorage.getItem("data")) || [];
    

   console.log("saved",saved_data);


    return(
        <div>
            <div className="container flex flex-wrap mt-10">
                {saved_data.map((item) => {
                     return <HomeCard imgUrl={item.imgUrl}/>
                 })}
            </div>
        </div>
    )
}