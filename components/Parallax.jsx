import React from 'react'
import styles from '../styles/Parallax.module.css';

export const Parallax = () => {
  return (
    <>
        <section className={ styles.our} >
            <div className={ styles.our_title} >
                <h2>Our commitment</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deleniti eaque repellat eligendi laboriosam cum similique non rem dolore saepe provident doloremque vitae autem voluptates temporibus natus corporis excepturi, modi nisi omnis dicta recusandae cumque, beatae ipsam. Maxime fugit corporis illo rem similique repellat recusandae veniam temporibus vitae aperiam fuga iure, enim et ad quam!</p>
            </div>
            <div className={ styles.content_our} >
                <div className={ styles.box_three}>
                    <h3>Lorem ipsum </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloremque!</p>
                </div>
                <div className={ styles.box_three}>
                <h3>Lorem ipsum </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloremque!</p>
                </div>
                <div className={ styles.box_three} >
                <h3>Lorem ipsum </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloremque!</p>
                </div>
            </div>
        </section>
    </>
  )
}
