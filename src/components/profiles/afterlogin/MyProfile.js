import React from "react";
import "./Afterlogin.css";
import profile from "../../../images/pimg.png"
import {FiEdit} from "react-icons/fi";
import Nav from 'react-bootstrap/Nav';

const MyProfile = () => {
    return (
        <>
            <section className="Myprofile">
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <div className="nameimg col-md-3">
                            <img src={profile} alt="" className="pimg" />
                            <h1>Name</h1>
                        </div>
                        <div className="pdetail col-md-5">
                        <h1>MY PROFILE</h1>
                        <br />
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Email Id</th>
                                        <td>abc@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mobile Number</th>
                                        <td>9784561235</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gender</th>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Birth Date</th>
                                        <td>15/08/1989</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">City</th>
                                        <td>Ahemdabad</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Nav.Link href="EditProfile">Edit profile<FiEdit /></Nav.Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyProfile;