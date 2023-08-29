import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import logo from '../../public/logo.png'
import Style from '../Footer/Footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={Style.footer}>
                <div className='container-fluid' >
                    <div className={Style.footer_head}>
                        <div className="row">
                            <div className="col-md-2 d-flex justify-content-center">
                                <Link href="/">

                                    <Image
                                        src={logo}
                                        alt="Picture of the author"
                                        width={70}

                                    />

                                </Link>
                            </div>
                            <div className="col-md-9 d-flex justify-content-end">
                                <div className={Style.social_logo}>
                                    <a href="#"> <i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"> <i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"> <i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"> <i className="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={Style.footer_body}>
                        <div className="row">
                            <div className="col-md-2 d-flex justify-content-center">
                                <div className={Style.home_line_five}>
                                    <i className="fa-solid fa-chevron-up"></i>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={Style.content}>
                                            <div className={Style.one}>
                                                <h2>About</h2>

                                                <div className={Style.link}>
                                                    <Link href="#">
                                                        Service
                                                    </Link>
                                                    <Link href="#">
                                                        Contact
                                                    </Link>
                                                    <Link href="#">
                                                        About Us
                                                    </Link>
                                                    <Link href="#">
                                                        Blog
                                                    </Link>
                                                    <Link href="#">
                                                        Support
                                                    </Link>
                                                </div>


                                            </div>

                                            <div className={Style.one}>
                                                <h2>Company</h2>

                                                <div className={Style.link}>
                                                    <Link href="#">
                                                        Service
                                                    </Link>
                                                    <Link href="#">
                                                        Contact
                                                    </Link>
                                                    <Link href="#">
                                                        About Us
                                                    </Link>
                                                    <Link href="#">
                                                        Blog
                                                    </Link>
                                                    <Link href="#">
                                                        Support
                                                    </Link>
                                                </div>


                                            </div>
                                            <div className={Style.one}>
                                                <h2>Patners</h2>

                                                <div className={Style.link}>
                                                    <Link href="#">
                                                        Service
                                                    </Link>
                                                    <Link href="#">
                                                        Contact
                                                    </Link>
                                                    <Link href="#">
                                                        About Us
                                                    </Link>
                                                    <Link href="#">
                                                        Blog
                                                    </Link>
                                                    <Link href="#">
                                                        Support
                                                    </Link>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={Style.from}>
                                            <h1>Contact us</h1>
                                            <div className={Style.from_control}>
                                                <p>Full Name</p>
                                                <div className={Style.input}>
                                                    <input type="text" id="exampleFormControlInput1" />
                                                </div>

                                            </div>
                                            <div className={Style.from_control}>
                                                <p>Email address</p>
                                                <div className={Style.input}>
                                                    <input type="text" id="exampleFormControlInput1" />
                                                </div>

                                            </div>
                                            <div className={Style.from_control}>
                                                <p>Message</p>
                                                <div className={Style.input}>
                                                    <textarea id="exampleFormControlTextarea1" rows={3}></textarea>
                                                </div>

                                            </div>


                                            <Link href="#" className={Style.send}>
                                                <h6 className='mb-0'>SEND</h6>
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={Style.footer_end}>
                        <div className="row">
                            <div className="col-md-11 d-flex justify-content-between">
                                <div>
                                    <h6 className='ms-5'>Copyright © 2023 Octagram Limited</h6>
                                </div>
                                <div className='d-flex'>
                                    <h6>Privacy</h6>
                                    <h6>Trem</h6>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer