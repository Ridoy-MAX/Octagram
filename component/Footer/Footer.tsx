import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import logo from '../../public/c1.png'
import logo1 from '../../public/oc2.png'
import Style from '../Footer/Footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={Style.footer}>
                <div className='container-fluid' >
                    <div className={Style.footer_head}>
                        <div className="row">
                            <div className="col-md-2 d-flex justify-content-center">
                                <Link href="/" className={Style.footer_logo}>


                                    <Image
                                        src={logo1}
                                        alt="Picture of the author"
                                        width={60}
                                        className={Style.one}

                                    />
                                    <Image
                                        src={logo}
                                        alt="Picture of the author"
                                        width={150}
                                        className='mt-3 ms-2 '

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
                                    <div className="col-md-6 d-flex justify-content-around">
                                        <div className={Style.footer_contact}>
                                            <div className={Style.one}>
                                                <h2 className='mb-4'>
                                                    Get in touch</h2>

                                                <div className={Style.link}>
                                                    <a >
                                                        <i className="fa-solid fa-phone-volume"></i>
                                                        <p>01549264941</p>
                                                    </a>
                                                    <a >
                                                        <i className="fa-regular fa-clock"></i>
                                                        <p>10 am to 8 pm</p>
                                                    </a>
                                                    <a >
                                                        <i className="fa-regular fa-address-card"></i>
                                                        <p>House No. 4 (Amin Tower), Level: 6, Road: 1/A, Sector: 9, North Side of Mascot Plaza, Uttara, Dhaka – 1230</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={Style.footer_contact2}>
                                            <div className={Style.one}>
                                                <h2 className='mb-4 me-5'>
                                                    What to Expect</h2>

                                                <div className={Style.link}>
                                                    <Link href="/contact" className={Style.buttton}>
                                                        Contact us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={Style.footer_end}>
                        <div className="row">
                            <div className="col-md-10 d-flex justify-content-center">
                                <div>
                                    <h6 className='ms-5'>Copyright © 2023 Octagram Limited</h6>
                                </div>


                            </div>

                            <div className="col-md-1">
                                <div className='d-flex'>
                                    {/* <h6>Privacy</h6>
                                    <h6>Trem</h6> */}
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