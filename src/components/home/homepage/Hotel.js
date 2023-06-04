import React from "react";
import Hcards from "./gallery/homecard/Hcards"
import "../../hotel/Hotels.css"


const Hotel = () => {
    return (
        <>
            <section className='popular top'>
                <div className='full_container'>
                    <div className='heading'>
                        <h1>Most Popular Hotel</h1>
                        <div className='line'></div>
                    </div>

                    <div className='content'>
                        <Hcards />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hotel;
