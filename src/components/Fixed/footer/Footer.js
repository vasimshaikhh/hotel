import React from "react"
import "./Footer.css"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className="row">
            <div className='col'>
              <h2>ABOUT US</h2>
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
              <br />
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
              <div className='icon flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>

            <div className='col navigation'>
              <h2>NAVIGATION</h2>
              <ul>
                <li>
                  <h5><NavLink to='/'>Home</NavLink></h5>
                </li>
                <li>
                  <h5><NavLink to='/about'>About us</NavLink></h5>
                </li>
                <li>
                  <h5><NavLink to='/Hotels'>Hotels</NavLink></h5>
                </li>
                <li>
                  <h5><NavLink to='/Gallery'>Gallery</NavLink></h5>
                </li>
                <li>
                  <h5><NavLink to='/ContactUs'>Contact Us</NavLink></h5>
                </li>
              </ul>
            </div>

            <div className='col post'>
              <h2>RECENT POSTS</h2>
              <ul>
                <li>
                  <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                  <label className='fa fa-calendar-alt'></label>
                  <span>01 Oct 2020</span>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                  <label className='fa fa-calendar-alt'></label>
                  <span>01 Oct 2020</span>
                </li>
              </ul>
            </div>

            <div className='col'>
              <h2>NEWSLETTER</h2>
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

              <input type='text' name='' id='' />
              <input type='text' className='primary-btn' value='SUBSCRIBE' />
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved By <span>KEVAL PATEL</span>.</p>
      </div>
    </>
  )
}

export default Footer
