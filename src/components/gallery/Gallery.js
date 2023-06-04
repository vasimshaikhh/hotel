import React from "react";
import "./Gallery.css"
import GalleryData from "./GalleryData"
import HeadTitle from "../Fixed/headtitle/Headtitle";
import Cards from "./Card";
import Footer from "../Fixed/footer/Footer";


const Gallery = () => {
    return (
        <>
        <HeadTitle />
        <section className='gallery top'>
          <div className='container grid'>
            {GalleryData.map((value) => {
              return <Cards img={value.img} title={value.title} />
            })}
          </div>
        </section>
        <Footer />
      </>
    )
}
export default Gallery;