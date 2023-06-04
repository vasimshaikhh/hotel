import React from "react";
import './download.css';
import appstore from '../../../../images/appstore-button.png'
import playstore from '../../../../images/google-play-button.png'
import appimg from '../../../../images/app-image-1.png'


const Download = () => {

    return (
        <>
            <section className='download top'>
                <div className='container flex_space'>
                    <div className='row'>
                        <h3>Download our app</h3>
                        <h1>Wow! Get This Templete App For Your Mobile</h1>
                        <ul>
                            <li>&#10003; Find nearby hotel in your network with templete</li>
                            <li>&#10003; Get paperless confirmation</li>
                            <li>&#10003; Make changes whenever, wherever</li>
                            <li>&#10003; 24/7 customer service in more than 40 languages</li>
                            <li>&#10003; No booking or credit card fees</li>
                            <li>&#10003; No booking or credit card fees</li>
                            <li>&#10003; Add your own reviews and photos</li>
                        </ul>
                        <div className='img flex'>
                            <img src={appstore} alt='' />
                            <img src={playstore} alt='' />
                        </div>
                    </div>
                    <div className='row row2'>
                        <img src={appimg} alt='' className='image' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Download;