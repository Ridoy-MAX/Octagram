import React from 'react'
import { motion } from 'framer-motion';
import Style from '../Home.module.css'
const two = () => {
    return (
        <div>
            <div className="row">
                <div className={Style.home_section_two}>
                    <div className={Style.head}>
                        <h1>Your business is our concern</h1>
                        <p>We, at Octagram believe that our clients’ concerns should be our concern too. We’re a business focused company and we do our best to create the best experience we can for you. That’s a promise</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                // whileHover={{ scale: 1.1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                                <h2>Cyber Security & VAPT</h2>
                                <div className={Style.img}>
                                    <img src="three.svg" alt="" className="template-image b-lazy b-loaded" />
                                </div>
                                <h4>Our team can secure your IT infrastructure with professional testing and assessments. </h4>

                            </motion.div>
                        </div>


                        <div className="col-md-3">
                               <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                                <h2>Web Design & Dev</h2>
                                <div className={Style.img}>
                                    <img src="one.svg" alt="" className="template-image b-lazy b-loaded" />
                                </div>
                                <h4>We are ready to develop your web site or application with expertise and attention.  </h4>
                                </motion.div>
                        </div>

                        <div className="col-md-3">
                        <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                                <h2>IT Training Center</h2>
                                <div className={Style.img}>
                                    <img src="two.svg" alt="" className="template-image b-lazy b-loaded" />
                                </div>
                                <h4>Updated and latest training and work relentlessly to achieve this goal. </h4>
                                </motion.div>
                        </div>
                        <div className="col-md-3">
                        <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                                <h2>Cyber Security & VAPT</h2>
                                <div className={Style.img}>
                                    <img src="three.svg" alt="" className="template-image b-lazy b-loaded" />
                                </div>
                                <h4>Our team can secure your IT infrastructure with professional testing and assessments. </h4>
                                </motion.div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default two