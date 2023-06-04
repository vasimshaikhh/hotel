import React from "react";
import "./Beforelogin.css";


const SignIn = () => {
    return (
        <>
            <section className="signin">
                <div className="container">
                    <div className="row justify-content-center">
                        <form className="col-md-5 form">
                            <h1>Log In</h1>
                            <br />
                            <h3>Welcome Again To HotelStay!</h3>
                            <br />
                            <div className='grid1'>
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
                                <button className='login'>Log In</button>
                                <h5><a href=" ">Forgot Password?</a></h5>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignIn;