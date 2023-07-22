import react, { useContext, useEffect } from "react";
import './Profile.css'
import { useState } from "react";
import Address from "../../Components/Address/Address";
import { authContext } from "../../Contexts/Auth/AuthContext";
import { orderContext } from "../../Contexts/OrderContext/OrderContext";

function Profile(){

    const [profileToggle,setProfileToggle] = useState(true)
    const {userData} = useContext(authContext)
    const {getAddress}= useContext(orderContext)

    const {firstName,lastName,email}= userData

    console.log(userData)



    

    return (<div className="profile-main-container">
        <div className="profile-content-container">
            <div className="profile-btns">
                <button style={{backgroundColor:profileToggle?"var(--Neutral-color)":""}} onClick={()=>setProfileToggle(true)} className={profileToggle&&"active"}>Profile</button><button style={{backgroundColor:profileToggle?"":"var(--Neutral-color)"}} onClick={()=>setProfileToggle(false)}>Address</button>
            </div>
          {profileToggle?
            <div className="profile-content">
                <p>Profile Details</p>
                <p>Name:{firstName + " " + lastName}</p>
                <p>Email:{email}</p>
            </div>
            :
            <div className="address-content">
                <p>My Addresses</p>
                <Address/>
            </div>}
           </div>
    </div>)
}

export default Profile