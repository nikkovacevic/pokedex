import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

export default function PokemonPage() {

    const id = useParams();

    const [name, setName] = useState();
    const [types, setTypes] = useState([]);
    const [hp, setHp] = useState();
    const [attack, setAttack] = useState();
    const [defense, setDefense] = useState();
    const [speed, setSpeed] = useState();
    

    const getPokemon = () => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${id.id}`).then((response) => response.json());
        }




    useEffect(() => {

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
                }
            });

            setTypes(data.types.map(type => type.type.name));

        }));

    }, []);

    return (
        <>
        <Header />
        <div className="pagecontainer">

            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id.id}.png`} alt="slika ne dela"/>

            <h1>{name}</h1>

            <h2>Type: {types.map((type)=>{return type.toUpperCase()+" "})}</h2>

            <h3>HP: {hp}</h3>
            <h3>Attack: {attack}</h3>
            <h3>Defense: {defense}</h3>
            <h3>Speed: {speed}</h3>
            

            

        </div>
        </>
    )
}
