import React from "react";

function DetailsFoodDrink() {
    return(
        <div className="Details-Food-Drink">
            <div className="Drinks-Images">
                <div className="Drinks">
                    <img /> 
                </div>
                <div className="Outdoor-Drinks">
                    <img /> 
                </div>
            </div>
            <div className="Food-and-Drink-Details">
                <div className="Food-Details">
                    <h1><i>Food</i></h1>
                    <h3>Passed heure derves during cocktail hour</h3>
                    <h3>Seated dinner under the outdoor tent</h3>
                    <h3>Late night snack bar</h3>
                </div>
                <div className="Drink-Details">
                    <h1><i>Drink</i></h1>
                    <h3>Full open bar during cocktail hour</h3>
                    <h3>Open bar during dinner and late night dancing</h3>
                    <h3>None alcoholic options will be available</h3>
                </div>
            </div>
            <div className="Food-Images">
                <div className="Pizza">
                    <img /> 
                </div>
                <div className="Cookies">
                    <img /> 
                </div>
            </div>
        </div>
    )
}

export default DetailsFoodDrink;