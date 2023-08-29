import React, { useState } from 'react';
import styles from '../Home.module.css'; // Import CSS module styles
import SliderRed from '../Four/Slider_red'
import Link from 'next/link';

const Four = () => {
    const [activeTab, setActiveTab] = useState('cyber'); // Default active tab

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className={styles.home_section_four}> {/* Use styles.home_section_four */}
                <div className={styles.tab}>
                <button
            className={`${activeTab === 'cyber' ? styles.activeButton : ''}`}
            onClick={() => handleTabClick('cyber')}
          >
            Cyber team
          </button>
          <button
            className={`${activeTab === 'red' ? styles.activeButton : ''}`}
            onClick={() => handleTabClick('red')}
          >
            Red team
          </button>
                </div>

                <div className='tab-content'>
                    {activeTab === 'cyber' && (
                        <div className={`${styles.cyber} ${styles.red}`}>

                            <div className='container-fluid' >
                                <div className="row">
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div className={styles.home_line_five}>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-6">

                                                <div className={styles.red_content}>
                                                    <img src="map.webp" alt="" className={styles.bg} />
                                                    <div className={styles.top}></div>
                                                    <div className={styles.content}>
                                                        <h1>THE SYNACK CYBER TEAM</h1>
                                                        <h2>
                                                            Expect Elite Talent

                                                        </h2>
                                                        <p>The Synack Red Team has you covered. Our elite, vetted community of security researchers brings a diverse set of skills to every test to support your teams’ pentesting initiatives.</p>


                                                        <a className="buttion"><h6 className='mb-0'>JOIN THE CYBER TEAM</h6></a>

                                                    </div>



                                                    <div className={styles.down}></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={styles.slider}>
                                                    <div className={styles.top}></div>
                                                    <SliderRed />
                                                    <div className={styles.down}></div>
                                                </div>


                                            
                                            </div>
                                        </div>





                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'red' && (
                        <div className={styles.red}>


                            <div className='container-fluid' >
                                <div className="row">
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div className={styles.home_line_five}>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-6">

                                                <div className={styles.red_content}>
                                                    <img src="map.webp" alt="" className={styles.bg} />
                                                    <div className={styles.top}></div>
                                                    <div className={styles.content}>
                                                        <h1>THE SYNACK RED TEAM</h1>
                                                        <h2>
                                                            Expect Elite Talent

                                                        </h2>
                                                        <p>The Synack Red Team has you covered. Our elite, vetted community of security researchers brings a diverse set of skills to every test to support your teams’ pentesting initiatives.</p>


                                                        <a className="buttion"><h6 className='mb-0'>JOIN THE RED TEAM</h6></a>

                                                    </div>



                                                    <div className={styles.down}></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className={styles.slider}>
                                                    <div className={styles.top}></div>
                                                       <div className={styles.slider_body}>
                                                       <SliderRed />
                                                       </div>
                                                    <div className={styles.down}></div>
                                                </div>
                                            </div>
                                        </div>





                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default Four;
