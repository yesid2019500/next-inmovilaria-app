
import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/router'
import styles from '../styles/Home.module.css'

const Banner = ( {users} ) => {


const [filterDate, setFilterDate] = useState([])
const [wordEnter, setWordEnter ] = useState("")

const handleFilter = (event) => {
   const searchWord = event.target.value;
   setWordEnter( searchWord )
   const newFilter = users.filter((value)=> { 
        return value.city.toLowerCase().includes(searchWord)
   })



   if ( searchWord === "" ) {
        setFilterDate([])
    }   else {
     setFilterDate( newFilter )
 }

}

const clearInput = () => {
  setFilterDate([])
  setWordEnter("")
}

  return (
<>
<div className={ styles.herocontainer } >
    <div className={ styles.herobody } >
         <h1 className={ styles.h1 } >ABC Company</h1>
            <span  className={ styles.span }>Welcome to our website </span>
          <div className={ styles.form } >
         <input onChange={ handleFilter } className={ styles.input }  type="text" value={ wordEnter }  />
      {  
          filterDate.length === 0 ? <button className={ styles.button } >Search</button> : <button className={ styles.button } >Close</button>
      }
      </div>  
    </div>
  </div>

  {  filterDate.length !== 0 && (
           <div className={ styles.dataResult} >
           { filterDate.slice(0,15).map((value, key)=> { 
               return <ul key={value._id} > 
                <li onClick={ ()=>Router.push('/inmo/[id]', `inmo/${value._id}`)} className="list-group-item-action d-flex justify-content-between align-items-center link_" key={ value._id }> { value.city }  </li>
                  </ul>
           })
           
         }
       </div>
     
     )}
  
</>
  )
}

export default Banner


