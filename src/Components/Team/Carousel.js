import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

// Avatar Images Import

import avatar1 from "/Freely/freely/src/images/avatars/avatar-1.png"
import avatar2 from "/Freely/freely/src/images/avatars/avatar-2.png"
import avatar3 from "/Freely/freely/src/images/avatars/avatar-3.png"
import avatar4 from "/Freely/freely/src/images/avatars/avatar-4.png"

function TestCarousel() {
  return (
    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
    >

        <>
        
            <img src={avatar1} alt="John Doe 1" />
            <div className="myCarousel">
                <h3>John Doe 1</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eaque?</p>
            </div>
           
        </>

        <>
        
            <img src={avatar2} alt="Jane Doe 2" />
            <div className="myCarousel">
                <h3>John Doe 2</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eaque?</p>
            </div>
           
        </>

        <>
        
            <img src={avatar3} alt="John Doe 3" />
            <div className="myCarousel">
                <h3>John Doe 3</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eaque?</p>
            </div>
           
        </>

        <>
        
            <img src={avatar4} alt="Jane Doe 4" />
            <div className="myCarousel">
                <h3>John Doe 4</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eaque?</p>
            </div>
        </>

    </Carousel>
  )
}

export default TestCarousel