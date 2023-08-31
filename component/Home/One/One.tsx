import React from 'react'
import { motion } from 'framer-motion';
import Style from '../Home.module.css'
import Link from 'next/link';
const One = () => {
  return (
    <div>
      <div className="row">
        <motion.div
       initial={{ y: 100, opacity: 0,  }}
       animate={{ y: 0 ,opacity: 1}}
       transition={{ ease: "easeOut", duration: 0.6 }}

          className={Style.home_section_one}>
          <h1>Expect</h1>
          <h2>Continuous</h2>
          <h2>Octagram Limited</h2>
          <p>Penetration testing and vulnerability management that finds your
            most critical vulnerabilities and tracks improvement over time</p>


   


          <motion.a 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 1 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
          
          className={Style.buttion_primary} >

            <h6>
              GET STARTED</h6>

          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default One