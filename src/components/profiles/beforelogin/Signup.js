import React from "react";
import "./Beforelogin.css";


const SignUp = () => {
    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="row justify-content-center">
                        <form className="col-md-5 form">
                            <h1>Welcome To HotelStay!</h1>
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
                                        Gender  <label>*</label>
                                    </span>
                                    <input type='gender' placeholder='Gender' />
                                </div>
                                <div className='input'>
                                    <span>
                                        Email <label>*</label>
                                    </span>
                                    <input type='email' placeholder='Email Id' required />
                                </div>
                                <div className='input'>
                                    <span>
                                        Password <label>*</label>
                                    </span>
                                    <input type='Password' placeholder='Enter Password' required />
                                </div>
                                <button className='createac'>Create an Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignUp;