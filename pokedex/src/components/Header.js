import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../assets/search-solid.svg'
import X from '../assets/x.svg'

export default function Header() {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <div className="header">
            
                <Link to="/" className={toggle ? "nav toggleoff" : "nav"}>Pokedex</Link>
            
            <input type="text" className={toggle ? "searchbar toggleon" : "searchbar"} />
            <button className={toggle ? "button toggleon" : "button"}> Find </button>

            <img src={Search} alt="search icon" onClick={handleClick} className={toggle ? "toggleoff" : ""}/>
            <img src={X} alt="x icon" onClick={handleClick}  className={toggle ? "x toggleon" : "x"}/>
        </div>
    )
}

