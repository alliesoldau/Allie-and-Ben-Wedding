import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar() {

    return (
        <div className="NavBar">
        <header>
            <nav className="nav">
            <div className="NavLinksContainer">
                    <div className="NavLinks" >
                        <NavLink className="button" exact to="/">
                            Home
                        </NavLink>
                        <NavLink className="button" exact to="/details">
                            Details
                        </NavLink>
                        <NavLink className="button" exact to="/travel">
                            Travel
                        </NavLink>
                        <NavLink className="button" exact to="/accommodations">
                            Accommodations
                        </NavLink>
                        <NavLink className="button" exact to="/registry">
                            Registry
                        </NavLink>
                        <NavLink className="RSVPbutton" exact to="/RSVP">
                            RSVP
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    </div> 
    )
}

export default NavBar;