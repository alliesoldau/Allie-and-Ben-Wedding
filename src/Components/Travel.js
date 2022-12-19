import React from "react";

function Travel() {

    return (
        <div className="Travel">
            <div className="Getting-to-the-area">
            <h1>Getting to the area</h1>
                <p><a href="https://www.albanyairport.com/">Albany Airport</a></p>
                <p><a href="https://www.amtrak.com/stations/alb">Albany Amtrak Station</a></p>
                <p>Once in the region most things are reachable by car only. We recommend either
                    driving here or renting a car upon arrival.
                </p>
            </div>
            <div className="Getting-to-the-venue">
            <h1>Getting to the venue</h1>
                <p>There is ample parking at the venue for those who drive in.</p>
                <p>Ride share services (Uber and Lyft are most prominent here) can be called at any hour.</p>
                <p>Are we arranging for a shuttle from the hotel?</p>
            </div>
        </div>
    )
}

export default Travel;