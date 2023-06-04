import React, { useState } from "react"

const Cards = (props) => {
  const [popup, setPopup] = useState(false)

  const toggleModal = () => {
    setPopup(!popup)
  }
  return (
    <>
    <div className="row">
      <div className='items'>
        <div className='img'>
          <img src={props.img} alt='Gallery img' />
          <i className='fas fa-image' onClick={toggleModal}></i>
        </div>
        <div className='title'>
          <h3>{props.title} </h3>
        </div>
      </div>
      </div>

      {popup && (
        <div className='popup'>
          <div className='hide'></div>
          <div className='popup-content'>
            <button onClick={toggleModal}>Close</button>
            <img src={props.img} alt='Gallery img' />
          </div>
        </div>
      )}
    </>
  )
}

export default Cards
