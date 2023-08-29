import React from 'react'
import Style from '../Home.module.css'
const Five = () => {
    return (
        <div className={Style.home_section_five}>
            <div className='container-fluid' >
                <div className="row">


                    <div className="col-md-2 d-flex justify-content-center">
                        <div className={Style.home_line_five}>




                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className={Style.content}>
                            <h1>Octagram Limited</h1>
                            <h2>
                                Ready to get

                            </h2>
                            <h2> started?</h2>

                            <a className="buttion"><h6 className='mb-0'>Contact US</h6></a>

                        </div>







                    </div>
                </div>
            </div>
        </div>
    )
}

export default Five