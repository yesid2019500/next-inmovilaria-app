import React from 'react'
import Head from 'next/head'
import Container from '../components/Container';
import { FilterHome } from '../components/FilterHome';
import fect from 'isomorphic-fetch';
import styles from '../styles/Home.module.css';

const AllProducts  = () => {
  // console.log( users );
  return (
<Container>
    <Head>
        <title>AllProducts</title>   
    </Head>
    <div className="container">
        <h2 className={styles.product} style={{color:'#fff'}} >Search your home</h2>
    </div>
    <FilterHome />
   
</Container>
  )
}






export default AllProducts;
