import React from "react";
import { Route, Switch } from 'react-router-dom';
import DetailsNav from "./DetailsNav";
import DetailsOverview from "./DetailsOverview";
import DetailsVenue from "./DetailsVenue";
import DetailsDressCode from "./DetailsDressCode";
import DetailsFoodDrink from "./DetailsFoodDrink";


function Details() {

    return (
        <div>
            <div className="Details">
                <DetailsNav />
                <div className="Details-Content">
                    <Switch >
                        <Route exact path="/details/home">
                            <DetailsHome />
                        </Route>
                        <Route path="/details/venue">
                            <DetailsVenue />
                        </Route>
                        <Route path="/details/dresscode">
                            <DetailsDressCode />
                        </Route>
                        <Route path="/details/fooddrink">
                            <DetailsFoodDrink />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Details;