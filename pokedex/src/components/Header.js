import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {



    return (
        <div className="header">
            <Link to="/" className="nav">Pokedex</Link>

            {/* {<div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" onChange={handleChange} placeholder="Find pokemon" />
                        <input type="submit" value="Find"/>
                    </label>
                </form>
            </div>} */}
        </div>
    )
}
