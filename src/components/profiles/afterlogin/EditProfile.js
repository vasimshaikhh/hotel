import React from "react";
import "./Afterlogin.css"
import profile from "../../../images/pimg.png"

const EditProfile = () => {
    return (
        <>
            <div className="editprofile">
                <div className="justify-content-center flex">
                    <form className="col-md-5 form">
                        <h1>Edit Your Profile</h1>
                        <br />
                        <div className="nameimg flex justify-content-center">
                            <img src={profile} alt="" className="pimg" />
                        </div>
                        <br />
                        <div className='grid1'>
                            <div className="flname row">
                                <div className='input col-md'>
                                    <span>
                                        First Name <label>*</label>
                                    </span>
                                    <input type='text' placeholder='First Name' required />
                                </div>
                                <div className='input col-md'>
                                    <span>
                                        Last Name <label>*</label>
                                    </span>
                                    <input type='text' placeholder='Last Name' required />
                                </div>
                            </div>
                            <div className='input'>
                                <span>
                                    Phone Number <label>*</label>
                                </span>
                                <input type='number' placeholder='Phone Number' />
                            </div>
                            <div className='input'>
                                <span>
                                    Email <label>*</label>
                                </span>
                                <input type='email' placeholder='Email Id' required />
                            </div>
                            <div className='input'>
                                <span>
                                    City
                                </span>
                                <input type='text' placeholder='Your City' />
                            </div>
                            <div className='input'>
                                <span>
                                    Birth Date
                                </span>
                                <input type='date' placeholder='dd/mm/yyyy' />
                            </div>
                            <div className='input'>
                                <span>
                                    Gender <vr/>
                                </span> 
                                <select id="gender">
                                    <option value="man">Male</option>
                                    <option value="woman">Female</option>
                                    <option value="another" selected>Other</option>
                                </select>
                            </div>

                            <button className='Edit'>Edit Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditProfile;