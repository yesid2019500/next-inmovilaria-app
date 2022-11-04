
import  React, { useEffect,useState } from 'react';
import styles from '../styles/Home.module.css';

export const FilterHome = ( ) => {

    const [data, setData ] = useState([] )
    const [search, setSearch] = useState("")

    const getData = async () => {
        const api = await fetch('https://db-inmoviliaria-production.up.railway.app/api/inmo')
        const response = await api.json();
        console.log( response );
            setData(response)
    }

    useEffect(()=> {
        getData()
    },[])


    const searcher = (e) => {
        setSearch(e.target.value)
        console.log( e.target.value );
    }



let result = !search ? data :  data.filter( (value)=>
    value.city.toLowerCase().includes(search.toLocaleLowerCase())
 
)


 return ( 
    <div className="container" >

          <div className={styles.input_filter} >
          <input 
            type="text" className="form-control m-4"
             placeholder='search your project' 
             value={ search }
             onChange={ searcher }
             />
          </div>

         <div class="row">

    {
        result.map( items => (
            <div class="col-md-4" key={items._id} >
            <div class="card">
              <img class="card-img-top" src={items.photo } alt={items.city} /> 
              <div class="card-body">
                <h4 class="card-title">{ items.city } </h4>
                <h6 class="card-subtitle mb-2 text-muted">{ items.price } </h6>
                <p class="card-text"> </p>
                <a href="#" class="card-link"> Pool: { items.property_pool } <br />  Subdivion: {items.property_subdivision } <br /> Floor: { items.property_flooring } <br /> Cooling: { items.property_cooling } bedrooms:  { items.property_bedrooms } Healting: { items.property_heating } </a>
                <a href="#" class="card-link">Buy now</a>
              </div>
            </div>
          </div>
        ))
    }

    
    

  </div>
    </div>
  )
 }