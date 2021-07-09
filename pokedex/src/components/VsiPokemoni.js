import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard';
import Header from './Header';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemone = () => {
    return fetch(URL).then((response) => response.json());
}


export default function VsiPokemoni() {

    const [pokemoni, setPokemoni] = useState([]);

    useEffect(() => {
        getPokemone().then((data => {
            setPokemoni(data);
        }));
    }, []);

    return ( 
        <>
            <Header />
        
            <div className="pokecards"> 
                {Object.entries(pokemoni)[3] &&
                    Object.entries(pokemoni)[3][1].map((pokemon, index) => {
                        return <PokemonCard key={index} {...pokemon} id={index+1} pkmn={pokemon} />;
                })}
            </div>  
        </>
    );
};
