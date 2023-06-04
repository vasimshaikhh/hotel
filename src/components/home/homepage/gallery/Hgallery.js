import React from "react"
import Hdata from "./homecard/Hdata"
import "./Hgallery.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Hgallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
  }
  return (
    <div>
      <section className='collection'>
        <div className='container top'>
          <Slider {...settings}>
            {Hdata.map((value) => {
              return (
                <div className='box'>
                  <img src={value.cover} alt='' />
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Hgallery