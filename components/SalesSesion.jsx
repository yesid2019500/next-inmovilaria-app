import React from 'react'
import styles from '../styles/Sales.module.css';
import Sales from '../Sales.json';
import Data from '../Data.json';



const SalesSesion = () => {

// console.log( Data[0].json_data.photos);

  return (
    <>
        <div className={styles.title_sales} >
            <h1>Found your new home</h1>
        </div>
        {/* className={ styles.container_sales }  */}
    <div className='row' >

        {  

            Sales.map( items => (
              <div className="col-md-4" key={ items.price } >
                      <div className={styles.all}  >
                <div className={styles.sale} >
                <div className={styles.imagen }>
                    <img src={items.img_sales } />
                </div>
                <div class={styles.info }>
                    <h4> { items.especial } </h4>
                    <p> {items.ready} </p>
                        <div className={styles.stars} >
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    <label>{ items.initial_price } </label><br/>
                    <label className={ styles.precio } > {items.price} </label><label className={ styles.mini} > {items.home} </label>
                    
                    <section className={styles.buttons} >
                        <a className="btn btn-4" href="#" title="brillo"><span> {items.buy} </span></a>
                    </section>
                </div>
            
                </div>
                <div className={styles.fot} >
                    <li>• { items.foo1 } </li>
                    <li>• { items.foo2 }</li>
                    <li>• { items.foo3 }</li>
                </div>
            </div>
            
        </div>
            ))
        
        }

    </div>
</>

  )
}

export default SalesSesion