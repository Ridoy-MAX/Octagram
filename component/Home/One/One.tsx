import React from 'react'
import Style from '../Home.module.css'
const One = () => {
  return (
    <div>
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
    </div>
  )
}

export default One