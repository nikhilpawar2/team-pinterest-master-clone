import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Created } from "./created";
import { Modal } from "./Modal";
import "./profile.css";
import { Saved } from "./saved";

export const Profile = () => {
  const [plus, setPlus] = useState(false);

  const [created, setCreated] = useState(true);

  const [saved, setSaved] = useState(false);
  const username = JSON.parse(localStorage.getItem("userdetails"));
 
  let user2 = username.email.split("@")  ;
    let usser3 = user2[0]
    console.log(usser3)

  return (
      <div>
          <Navbar/>
      <div>
        <div className="profile-img">
          <div>
            <img src="/images/profile/profile-img.jpg" alt="" />
          </div>
        </div>
        <div className="profile-name">
          <h2 className="my-2">{`username: ${usser3}`}</h2>
          <h4 className="mt-2">{username.email}</h4>
          <h5 className="mt-4 mb-4">
            {Math.floor(Math.random() * 500) + 1} following
          </h5>
        </div>
        <div className="share-editProfile">
          <button className="btn bg-gray-400 rounded-full">Share</button>
          <button className="btn bg-gray-400 rounded-full">Edit profile</button>
        </div>
        <div className="created-saved">
          <button
            onClick={() => {
              setCreated(true);
              setSaved(false);
            }}
          >
            Created
          </button>
          <button
            onClick={() => {
              setSaved(true);
              setCreated(false);
            }}
          >
            Saved
          </button>
        </div>
      </div>
      <hr />
      {/* <div onClick={()=>{
               setPlus(true);
           }} className="add_pin">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png" alt="add pin" />
           </div> */}

      <div>
        {created ? <Created /> : null}
        {saved ? <Saved /> : null}
      </div>
      <div
        onClick={(event) =>
          event.target.className == "add_pin_modal" ? setPlus(false) : null
        }
        className="show_modal"
      >
        {plus ? <Modal /> : null}
      </div>
    </div>
  );
};
