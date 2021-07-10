import React from 'react'
import {Link} from 'react-router-dom'


export default function PokemonCard(props) {

    return (
        <>
            <Link to={`/pokemon/${props.id}`}> 
        <div className="pokeboxwrapper">
            
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
