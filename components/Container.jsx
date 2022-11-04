
import React from 'react'
import Head from 'next/head'
import Navigation from './navigation'

const Container = (props) => {
  return (
    <>
        <Head>
            <title>Inmoviliaria App</title>   
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" />
        </Head>
        <Navigation/>
       
        <div>
            { props.children }
        </div>
    </>
  )
}

export default Container