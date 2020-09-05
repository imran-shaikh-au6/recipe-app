import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import MainpPage from "./components/MainPage";
import Practive from "./components/Practice";
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/practice" component={Practive} />
                <Route exact path="/" component={Navbar} />
                <Route exact path="/recipe" component={MainpPage} />
            </Switch>
        </div>
    );
};
export default App;
