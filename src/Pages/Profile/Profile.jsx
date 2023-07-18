import react from "react";
import './Profile.css'
import { useState } from "react";
import Address from "../../Components/Address/Address";

function Profile(){

    const [profileToggle,setProfileToggle] = useState(false)



    const handleToggle=()=>{
        setProfileToggle(!profileToggle)
    }

    return (<div className="profile-main-container">
        <div className="profile-content-container">
            <div className="profile-btns">
                <button onClick={handleToggle}>Profile</button><button onClick={handleToggle}>Address</button>
            </div>
          {profileToggle?
            <div className="profile-content">
                <p>Profile Details</p>
                <p>Name:</p>
                <p>Email:</p>
            </div>
            :
            <div className="address-content">
                <p>My Addresses</p>
                <Address/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium numquam officiis, unde fugit hic et perspiciatis blanditiis placeat vel?<br/> 
                 <button>delete</button><button>EDIT</button>
                </p>
            <button>add new address</button>
            </div>}
            {false&& <div>
                    <form type="submit">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <div className="address-btns">
                            <button>save</button>
                            <button>Cancel</button>
                            <button>fill with Dummy details</button>
                        </div>
                    </form>
                </div>}
           </div>
    </div>)
}

export default Profile