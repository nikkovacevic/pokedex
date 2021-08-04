import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header2 from './Header2'

import typeColors from '../assets/pokemonTypes';

export default function PokemonPage() {

    const id = useParams();

    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [types, setTypes] = useState([]);
    const [hp, setHp] = useState();
    const [attack, setAttack] = useState();
    const [defense, setDefense] = useState();
    const [speed, setSpeed] = useState();
    
    useEffect(() => {

        const getPokemon = () => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${id.id}`).then((response) => response.json());
        }

        getPokemon().then((data => {
            setName(data.name);

            data.stats.map (stat => {
                switch(stat.stat.name) {
                    case 'hp':
                        setHp(stat['base_stat'])
                        break;
                    case 'attack':
                        setAttack(stat['base_stat'])
                        break;
                    case 'defense':
                        setDefense(stat['base_stat'])
                        break;
                    case 'speed':
                        setSpeed(stat['base_stat'])
                        break;
                    default:
                        break;
                }
                return null;
            });

            setTypes(data.types.map(type => type.type.name));

            setImage(data.sprites.front_default);

        }));

    }, []);

    return (
        <>
        <Header2 />
        <div className="pagecontainer">

            <img src={image} alt="slika ne dela"/>

            <h1>{name}</h1>

            <div className="cardtypes">

                {types.map((type, index) => {
                    return (

                        <div className="cardtype" key={index} style={{ backgroundColor: typeColors[type]}}>
                            {type}
                        </div>

                    );

                })}

                

            </div>

            <h3>HP: {hp}</h3>
            <h3>Attack: {attack}</h3>
            <h3>Defense: {defense}</h3>
            <h3>Speed: {speed}</h3>
            

            

        </div>
        </>
    )
}
