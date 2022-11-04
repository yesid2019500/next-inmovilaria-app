import React from 'react'
const imgMain  = '../img/11.jpg';
import styles from '../styles/MainSecion.module.css';
import { FaHeart, FaHome, FaPeopleCarry } from "react-icons/fa";



export const MainSecion = () => {
  return (
    <>
        <section className={ styles.mainContainer} >
            <div className={ styles.main_img }>
                <img src={ imgMain} alt="main" />
            </div>
            <div className={ styles.content_main} >
                <div className={ styles.main_content_title } >
                  <h2>New projects</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dignissimos animi placeat voluptas accusantium ab modi asperiores, neque molestiae minus, aut odio reiciendis et assumenda repellat veritatis harum commodi vero doloremque. Aspernatur iste ab quibusdam sed, quo suscipit, sequi mollitia ex inventore natus, perspiciatis fugiat.</p>
                </div>
                <div className={ styles.content_main_se} >
                    <div className={ styles.se_one} >
                      <FaHeart className={ styles.hart } />  
                      <h3 className={ styles.title_icon }>we work with our hart </h3>
                    </div>
                    <div className={ styles.se_one} >
                        <FaHome className={ styles.home } />
                      <h3 className={ styles.title_icon }> together you get your new home </h3>
                    </div>
                    <div className={ styles.se_one} >
                    < FaPeopleCarry className={ styles.people } />
                      <h3 className={ styles.title_icon } > responsability </h3>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
