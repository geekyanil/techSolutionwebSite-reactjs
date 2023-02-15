import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

const Services = () => {
    return (
        <div className='services'>
            <Carousel className='carousel'
                infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                interval={1000}
                dynamicHeight={false}
            >

                <div>
                    <img src={img1} alt="" />
                    <p className='legend'>MERN Stack</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <p className='legend'>Full Stack</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p className='legend'>React Development</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services