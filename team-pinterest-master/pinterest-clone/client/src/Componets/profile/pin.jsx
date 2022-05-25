
// import { useState } from "react"
import "./pin.css"


export const Pin=(props)=>{

//    const upload_img=(event,setPinImage)=>{
//            if(event.target.files && event.target.files[0]){
//                if(/image\/*/.test(event.target.files[0].type)){
//                    const reader=new FileReader();
                    
//                    reader.onload=function(){
//                        setPinImage(reader.result);
//                    }
//                    reader.readAsDataURL(event.target.files[0])
//                }
//            }
//    }

    // const [pinImage,setPinImage]=useState();

    // console.log(pinImage)
 
const check_size=(event)=>{
    const image=event.target;

    image.classList.add("pin_max_width");

    if(image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width || image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height){
        image.classList.remove("pin_max_width");
        image.classList.add("pin_max_height");
    }

    image.style.opacity=1;
}   

    return (
        <div>
            {/* <input onChange={event=> upload_img(event,setPinImage)} type="file" name="picture" id="picture" /> */}
            <div className="card">
                <div className="pin_title">{props.pinDetails.title}</div>
                <div className="pin_modal">
                    <div className="modal_head">
                        <div className="save_card">Save</div>
                    </div>
                    <div className="modal_foot">
                            <div className="destination">
                                {/* <div className="pint_mock_icon_container">
                                    <img src="" alt="pint_mock_icon" className="pint_mock_icon" />
                                </div>
                                <span>etery</span> */}
                            </div>
                            <div className="pint_mock_icon_container">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png" alt="edit" className="pint_mock_icon" />
                                </div>
                                <div className="pint_mock_icon_container">
                                {/* <span class="iconify" data-icon="bytesize:edit"></span> */}
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/OOjs_UI_icon_upload.svg/1200px-OOjs_UI_icon_upload.svg.png" alt="" className="pint_mock_icon" />
                                </div>
                    </div>
                </div>
                <div className="pin_image">
                    <img onLoad={check_size} src={props.pinDetails.img_blob} alt="pin_image" />
                </div>
            </div>
        </div>
    )
}