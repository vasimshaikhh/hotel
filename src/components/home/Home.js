import React from "react";
import { Outlet } from "react-router-dom";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-material-ui-carousel';
import slide1 from '../../images/slide2.jpg'
import slide2 from '../../images/slide1.jpg'
import slide3 from '../../images/slide3.jpg'
import HomeAbout from "./homepage/Homeabout";
import Hotel from "./homepage/Hotel";
import Download from "./homepage/download/Download";
import Works from "../home/homepage/working/Works";
import Hgallery from "./homepage/gallery/Hgallery";
import Footer from "../Fixed/footer/Footer";



const Home = () => {
    return (
        <>
            {/* <Outlet /> */}
            <Carousel>
                <div className="carouselimg">
                    <img src={slide1} alt="slide1" />
                </div>
                <div className="carouselimg">
                    <img src={slide2} alt="slide2" />
                </div>
                <div className="carouselimg">
                    <img src={slide3} alt="slide3" />
                </div>
            </Carousel>

            {/* <section className="slide-form">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <h2>Enjoy Your Holiday</h2>
                            <span>Search and Book Hotel</span>
                        </div>
                        <form action="">
                            <div className="row">
                                <input type='text' className="col-md" placeholder='Search City' name='' id='' />
                                <input type='number' className="col-md" placeholder='Rooms' />
                                <div className="row">
                                    <input type='date' className="col-md" placeholder='Check In' />
                                    <input type='date' className="col-md" placeholder='Check Out' />
                                    <input type='number' className="col-md" placeholder='Adult(s)(+18)' />
                                    <input type='number' className="col-md" placeholder='Children(0 - 17)' />
                                </div>
                                <input type='submit' value='search' className="submit col-md" />
                            </div>
                        </form>
                    </div>
                </div>
            </section> */}
            <HomeAbout />
            <Hotel />
            <Download />
            <Works />
            <Hgallery />
            <Footer />
        </>
    )
}
export default Home;        