import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar sticky-top">
            <a className="navbar-brand" href="https://reactjs.org/">
                {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""> */}
                {props.children}
            </a>
            <span className="instructions">
            {props.instructions}
            </span>
            <ul>
                <li className="score">
                Score: <strong>{props.currentScore}</strong>
                </li>
                {/* <li>
                ⌇ Top Score: {props.topScore}
                </li> */}
            </ul>
        </nav>
    ); 
};

export default Nav;






