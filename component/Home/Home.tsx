import React from 'react'
import Navbar from '../Navbar/Navbar'
import Style from './Home.module.css'
const Home = () => {
    return (
        <div>

            <Navbar />
            <video autoPlay loop muted playsInline className={Style.backround_vedio}>
                <source src="11-04.mp4" type="video/mp4" />
            </video>


            <div className="container-fluid ">

                <div className="row">


                    <div className="col-md-2 d-flex justify-content-center">
                        <div className={Style.home_line}>

                            <div className={Style.text}>

                                <i className="fa-solid fa-chevron-down"></i>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className={Style.home_section_one}>
                                <h1>Expect</h1>
                                <h2>Continuous</h2>
                                <h2>Octagram Limited</h2>
                                <p>Penetration testing and vulnerability management that finds your
                                    most critical vulnerabilities and tracks improvement over time</p>

                                <a className={Style.buttion_primary} >

                                    <h6>
                                        GET STARTED</h6>

                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className={Style.home_section_two}>
                                <div className={Style.head}>
                                    <h1>Your business is our concern</h1>
                                    <p>We, at Octagram believe that our clients’ concerns should be our concern too. We’re a business focused company and we do our best to create the best experience we can for you. That’s a promise</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className={Style.card}>
                                            <h2>Cyber Security & VAPT</h2>
                                            <div className={Style.img}>
                                                <img src="three.svg" alt="" className="template-image b-lazy b-loaded" />
                                            </div>
                                            <h4>Our team can secure your IT infrastructure with professional testing and assessments. </h4>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className={Style.card}>
                                            <h2>Web Design & Dev</h2>
                                            <div className={Style.img}>
                                                <img src="one.svg" alt="" className="template-image b-lazy b-loaded" />
                                            </div>
                                            <h4>We are ready to develop your web site or application with expertise and attention.  </h4>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className={Style.card}>
                                            <h2>IT Training Center</h2>
                                            <div className={Style.img}>
                                                <img src="two.svg" alt="" className="template-image b-lazy b-loaded" />
                                            </div>
                                            <h4>Updated and latest training and work relentlessly to achieve this goal. </h4>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={Style.card}>
                                            <h2>Cyber Security & VAPT</h2>
                                            <div className={Style.img}>
                                                <img src="three.svg" alt="" className="template-image b-lazy b-loaded" />
                                            </div>
                                            <h4>Our team can secure your IT infrastructure with professional testing and assessments. </h4>
                                        </div>
                                    </div>

                                   
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Home