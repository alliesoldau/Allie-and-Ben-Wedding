import React from "react";
import {NavLink} from 'react-router-dom'

function DetailsNav() {

    return (
        <div className="Details-Nav-Bar">
        <header>
            <nav className="nav">
            <div className="Details-Nav-Links-Container">
                    <div className="Details-Nav-Links" >
                        <NavLink className="button" exact to="/details/overview">
                            Overview
                        </NavLink>
                        <NavLink className="button" exact to="/details/venue">
                            Venu
                        </NavLink>
                        <NavLink className="button" exact to="/details/dresscode">
                            Dresscode
                        </NavLink>
                        <NavLink className="button" exact to="/details/fooddrink">
                            Food & Drink
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    </div> 
    )
}

export default DetailsNav;