import React from "react"
import PopularData from "../../Popdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {  useHotelGetQuery } from "../../../../../redux/services/api"

const SampleNextArrow = (props) => {

 
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const Hcards = () => {
  const response = useHotelGetQuery()
  console.log(response,'response')
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
  return (
    <>
      {/* <Slider {...settings}>
        {PopularData.map((value) => {
          return (
            <>
              <div className='cards'>
                <div className='item'>
                  <div className='imgae'>
                    <img src={value.image} alt='' />
                    <i className='fas fa-map-marker-alt'>
                      <label>{value.country}</label>
                    </i>
                  </div>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='far fa-star'></i>
                  </div>
                  <div className='details'>
                    <h2>{value.name}</h2>
                    <div className='boarder'></div>
                    <h3>
                      {value.price} / <span>Per night</span>
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider> */}

      <Slider {...settings}>
      {response.isSuccess===true ? response.data.data?.map((value) => {
          return (
            <>
              <div className='cards'>
                <div className='item'>
                  <div className='imgae'>
                    <img style={{height:'4rem',width:'4rem'}}src={value.image} alt='' />
                    <i className='fas fa-map-marker-alt'>
                      <label>{value.city}</label>
                    </i>
                  </div>
                  <div className='rate'>
                    {value.rate}
                  </div>
                  <div className='details'>
                    <h2>{value.name}</h2>
                    <div className='boarder'></div>
                    <h3>
                      {value.rupees} / <span>  Per night</span>
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )
      }) : null}
        </Slider>
    </>
  )
}

export default Hcards
