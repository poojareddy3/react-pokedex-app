import { useState, useEffect } from 'react'
import axios from 'axios'
import {CLIENT_URL} from '../services/constants'
import Pokemon from './Pokemon'
// import dotenv from 'dotenv'
// dotenv.config()

function PokeList() {

    const [pokemons, setPokemons] = useState([])
    
    // let client_url = process.env.CLIENT_URL

    useEffect(() => {
     const fetchData = async () => {
         try {
             const response = await axios.get(CLIENT_URL)
             //console.log(response);
            const { results } = response.data;
            //console.log(results);
            setPokemons(results)
         } catch (error) {
             console.log(error)
         }
     }
     fetchData()
  }, [])
    return(
        <ul className="container collection with-header" style={{ marginTop: 25 }}>
        {
            pokemons.map((pokemon, index) => {   // If there is no data, just return an empty array
               const { name, url } = pokemon
          return <Pokemon name={name} url={url} key={index} />
            })
        }

        </ul>
    )
}

export default PokeList