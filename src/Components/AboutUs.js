import React from 'react'
import author from "../me.jpg"

function AboutUs() {
  return (
    <div className="aboutUsContainer container py-5">
        <div className="row">

            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-3 mt-3">
                    <img className="profile-img" src={author} alt="author.." />
                </div>
            </div>

            <div className="col-lg-6 col-xm-12 text-center">
                <h1 className="aboutUs-heading">About Us</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae consequuntur,
                    aperiam eos temporibus ad cum aliquid minima ullam reprehenderit nisi,
                    voluptate quisquam, labore ab iste nam nulla maxime. Recusandae, eius!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae consequuntur,
                    aperiam eos temporibus ad cum aliquid minima ullam reprehenderit nisi,
                    voluptate quisquam, labore ab iste nam nulla maxime. Recusandae, eius!
                </p>
            </div>
             
        </div>
    </div>
  )
}

export default AboutUs