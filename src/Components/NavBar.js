import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar() {

    return (
        <div className="NavBar">
        <header>
            <nav className="nav">
            <div className="NavLinksContainer">
                    <div className="NavLinks" >
                        <NavLink className="button" activeStyle={{"text-decoration": "underline"}} exact to="/">
                            Home
                        </NavLink>
                        <NavLink className="button" activeStyle={{"text-decoration": "underline"}} exact to="/details/overview">
                            Details
                        </NavLink>
                        <NavLink className="button" activeStyle={{"text-decoration": "underline"}} exact to="/travel">
                            Travel
                        </NavLink>
                        <NavLink className="button" activeStyle={{"text-decoration": "underline"}} exact to="/accommodations">
                            Accommodations
                        </NavLink>
                        <NavLink className="button" activeStyle={{"text-decoration": "underline"}} exact to="/registry">
                            Registry
                        </NavLink>
                        <NavLink className="RSVPbutton" activeStyle={{"text-decoration": "underline"}} exact to="/RSVP">
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