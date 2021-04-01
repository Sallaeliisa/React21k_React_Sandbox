import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>
        </div>
    );
};
const Gallery = () => {
    return (
        <div>
            <h1>This is gallery page</h1>
        </div>
    );
};
const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const Main_Router = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" component={Gallery} />
            </Switch>
        </div>
    );
};

export default Main_Router;