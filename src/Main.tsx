import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

export class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="container">
                <Header />
                <main role="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect from="/Home" to="/"/>
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                    </Switch>
                </main>
            </div>
        );
    }
}
