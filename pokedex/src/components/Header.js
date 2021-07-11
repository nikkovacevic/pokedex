import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../assets/search-solid.svg'
import X from '../assets/x.svg'

export default function Header(props) {

    const [findPokemon, setFindPokemon] = useState("");

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    const handleSearch = (e) => {
        setFindPokemon(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAdd({ find: findPokemon});
    }

    return (
        <div className="header">
            
                <Link to="/" className={toggle ? "nav toggleoff" : "nav"}>Pokedex</Link>
            <form onSubmit={handleSubmit}>
                <input type="text" className={toggle ? "searchbar toggleon" : "searchbar"} onChange={handleSearch}/>
                <input type="submit" value="Find" className={toggle ? "button toggleon" : "button"} />
            </form>
            <img src={Search} alt="search icon" onClick={handleClick} className={toggle ? "toggleoff" : ""}/>
            <img src={X} alt="x icon" onClick={handleClick}  className={toggle ? "x toggleon" : "x"}/>
        </div>
    )
}

