import * as React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component<{}, {}> {
    public render() {
        return (
            <header className="header clearfix">
                <nav>
                    <ul className="nav nav-pills float-right">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact  to="/">Home</NavLink>
                            {/* <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active"  to="/about">About</NavLink>
                            {/* <a className="nav-link" href="#">About</a> */}
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active"  to="/contact">Contact</NavLink>
                            {/* <a className="nav-link" href="#">Contact</a> */}
                        </li>
                    </ul>
                </nav>
                <h3 className="text-muted">Project name</h3>
            </header>
        );
    }
}
