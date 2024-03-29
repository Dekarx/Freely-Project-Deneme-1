import React from 'react'

import { IconContext } from 'react-icons';
import { FaFacebookF , FaDesktop , FaFileCode , FaGoogle} from 'react-icons/fa';


function Services() {
  return (
    // hepsine ortak aynı icon özellikleri için Alttaki satıra yaz
    <IconContext.Provider value={{ color : "" , size : ""}}>  
        <div className='services'>
        <h1 className="py-5">Us Services</h1>
            <div className="container">
                <div className="row">

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FaDesktop className="icon" />
                            </div>
                            <h3>Web Design</h3>
                            <p>
                                I approach each project individually and always focus on the result
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                             <div className="circle">
                                <FaFileCode className="icon" />
                            </div>
                            <h3>Web Development</h3>
                            <p>
                                Your website will be with an new proven technologies.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FaFacebookF className="icon" />
                            </div>
                            <h3>Facebook Ads</h3>
                            <p>
                                Your potantial clients well see your services or product on Instagram.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FaGoogle className="icon" />
                            </div>
                            <h3>Google Ads</h3>
                            <p>
                                Your potantial clients well see your services or product on Instagram.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </IconContext.Provider>
  )
}

export default Services