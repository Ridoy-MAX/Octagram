import Link from "next/link";
import { motion } from 'framer-motion';
import styles from "./Navbar.module.css";
import Image from 'next/image'
import logo from '../../public/logo.png'
import { useState, useEffect } from 'react';

const Navbar = () => {


  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div>

      <div >
        <header className={styles.header}>
          <i
            className={`fa-solid fa-bars ${styles.menuToggle}`}
            onClick={handleMenuToggle}
          ></i>
          <Link href="/" className={styles.header__logo}>
            <div className={styles.logo}>
              <img src="logo.svg" alt="" />
            </div>
          </Link>

          <i className={`fa-regular fa-user ${styles.menuser}`}></i>





          <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
            <div className="sm_none">

              <div className="container-fluid">
                <div className="row">

                  <div className="col-md-11 m-auto">
                    <div className={styles.menu}>

                      <a className={styles.close}>
                        <i
                          className={`fa-solid fa-xmark ${styles.menuToggle}`}
                          onClick={handleMenuToggle}
                        ></i>
                      </a>







                      <div className="d-flex justify-content-center">
                        <Link href="/">

                          <Image
                            src={logo}
                            alt="Picture of the author"
                            width={70}

                          />

                        </Link>
                      </div>

                      <div className={styles.nav_item}>
                        <ul className={styles.list}>

                          <li className={styles.menu_item_has_children}>
                            <Link href="" className={styles.buttion_primary_none}> <p>Home</p></Link>

                          </li>

                          <li>
                            <Link href="/Multi_sender" className={styles.buttion_primary_none}>
                              <p> Service</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/Multi_sender" className={styles.buttion_primary_none}>
                              <p>   About</p>
                            </Link>
                          </li>


                          <li>
                            <Link href="" className={styles.buttion_primary_none}>
                              <p>  Contact</p>
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="" className={styles.them} onClick={() => setDarkMode(!darkMode)}>
                              <i className="fa-regular fa-sun"></i>

                            </Link>
                          </li> */}
                          <li>

                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}

                            >
                              <Link

                                href="#" className={styles.buttion_primary} >

                                <p>
                                  Contact us</p>

                              </Link>

                            </motion.div>






                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </nav>
        </header>
      </div>
    </div >
  )
}

export default Navbar