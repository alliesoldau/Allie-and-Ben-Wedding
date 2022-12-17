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
                            OVERVIEW
                        </NavLink>
                        <NavLink className="button" exact to="/details/venue">
                            VENU
                        </NavLink>
                        <NavLink className="button" exact to="/details/dresscode">
                            DRESSCODE
                        </NavLink>
                        <NavLink className="button" exact to="/details/fooddrink">
                            FOOD & DRINK
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    </div> 
    )
}

export default DetailsNav;