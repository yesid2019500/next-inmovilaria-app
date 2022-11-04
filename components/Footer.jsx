import React from 'react'
import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <>
        <div className={ styles.conatiner_footer} >
            <div className={ styles.content_footer} >
                <h4>Information</h4>
                <a href="">Pages</a>
                <a href="">Our Team </a>
                <a href="">Feuchers</a>
                <a href="">Pricing</a>
            </div>

            <div className={ styles.content_footer}>
                <h4>Ressources</h4>
                <a href="">Monitoring Grader</a>
                <a href="">Video Tutorial </a>
                <a href="">Term & Service</a>
                <a href="">ABC API</a>
            </div>

            <div className={ styles.content_footer}>
                <h4>Help</h4>
                <a href="">Sign Up  </a>
                <a href="">Login </a>
                <a href="">Terms of Services</a>
                <a href="">Privacy Policy</a>
            </div>

            <div className={ styles.content_footer}>
                <h4>Contact US</h4>
                <a href="">Contact us if need help withanything  </a>
                <a href="">+01 123-456-7890</a>
                <div className={ styles.footer_icons} >
                    <a href=""> <img src="https://w7.pngwing.com/pngs/991/568/png-transparent-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png" alt="" /> </a>

                    <a href=""> <img src="https://i.pinimg.com/736x/af/42/1b/af421b4a27e5d5a9d788bbcbbdfcaedb.jpg" alt="" /> </a>

                    <a href=""> <img src="https://i.pinimg.com/originals/cd/c3/94/cdc394a29430a0f8c1378952e0bfddee.png" alt="" /> </a>
                </div>
            </div>
            {/* <div className="title_f">
                <p>2022 © ABC, All Rights Reserved</p>
            </div> */}
        </div>
    </>
  )
}
