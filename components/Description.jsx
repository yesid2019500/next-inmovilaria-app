import React from 'react'
const imgDes  = '../img/09.jpg';
import styles from '../styles/Description.module.css';

export const Description = () => {
  return (
    <>
        <section className="container">
           <div className="row">
           <div className={styles.content_description} >
                <div className="col-md-6" >
                    <img className="img-fluid" src={ imgDes } alt={ imgDes } />
                </div>
                <div className='col-md-6' >
                    <h4 className={styles.h4_tex} >THE BEST US</h4>
                    <p className={styles.p_tex} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ut fuga nesciunt, soluta voluptates placeat temporibus ullam non esse odit optio obcaecati blanditiis quaerat at, culpa repellat, iste architecto odio dolores amet animi id laudantium excepturi! Itaque in magnam dolores?</p>
                </div>
            </div>
           </div>
        </section>
    </>
  )
}
