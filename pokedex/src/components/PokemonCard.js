import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import typeColors from '../assets/pokemonTypes';


export default function PokemonCard(props) {

    

    const [types, setTypes] = useState([]);
    console.log(props);

    const getPokemon = () => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`).then((response) => response.json());
    }

    
    useEffect(() => {
        getPokemon().then((data) => {
            setTypes(data.types.map(type => type.type.name));
        })
    }, []);
    
    console.log(types)

    return (
        <>
            <Link to={`/pokemon/${props.id}`}> 
        <div className="pokeboxwrapper" style={{ backgroundImage: `linear-gradient(to right, ${typeColors[types[0]]}, ${typeColors[types[types.length-1]]})`}}>
            
            <img 
                className="pokeimg"
                src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
                alt={`${props.name}`}
            /> 
            
             <p className="pokename">
                 {props.name.toUpperCase()}
             </p>
               
             </div>
            </Link>
        </>
    )
}
