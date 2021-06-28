import React from 'react'

export default function PokemonCard(props) {

    console.log(props);

    return (
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
    )
}
