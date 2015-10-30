import React from "react";
import {Router, Route} from "react-router";
import {
    Landing, 
    MeshPage, 
    SimpleBox,
    ShapesPage,
    CollisionsPage,
    TriggersPage
} from "./pages";

const Routes = (
    <Router>
        <Route path="/" component={Landing} >
            <Route path="mesh" component={MeshPage} />
            <Route path="simple-box" component={SimpleBox} />
            <Route path="shapes" component={ShapesPage} />
            <Route path="collisions" component={CollisionsPage} />
            <Route path="triggers" component={TriggersPage} />
        </Route>
    </Router>
);

export default Routes;