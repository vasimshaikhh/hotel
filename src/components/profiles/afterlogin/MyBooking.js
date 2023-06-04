import React from "react";
import "./Afterlogin.css";



const MyBooking = () => {
    return (
        <>
            <section className="Myprofile">
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <div className="pdetail col-md-6">
                            <h1>My Past Booking</h1>
                            <br />
                            <table class="table">
                                <thead>
                                    <th scope="row">Hotel Name</th>
                                    <th scope="row">From Date</th>
                                    <th scope="row">To Date</th>
                                    <th scope="row">Person</th>
                                    <th scope="row">City</th>
                                    <th scope="row">Payment</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hotel Sunrise</td>
                                        <td>10/02/2022</td>
                                        <td>12/02/2022</td>
                                        <td>1</td>
                                        <td>Mumbai</td>
                                        <td>2500 INR</td>
                                    </tr>
                                    <tr>
                                        <td>Hotel Hilton</td>
                                        <td>15/04/2022</td>
                                        <td>16/04/2022</td>
                                        <td>1</td>
                                        <td>Delhi</td>
                                        <td>3500 INR</td>
                                    </tr> 
                                    <tr>
                                        <td>Hotel Rabada</td>
                                        <td>04/06/2022</td>
                                        <td>06/06/2022</td>
                                        <td>2</td>
                                        <td>Udaipur</td>
                                        <td>7000 INR</td>
                                    </tr> 
                                    <tr>
                                        <td>Hotel Divine Hills</td>
                                        <td>12/11/2022</td>
                                        <td>15/11/2022</td>
                                        <td>2</td>
                                        <td>shimla</td>
                                        <td>12000 INR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyBooking;