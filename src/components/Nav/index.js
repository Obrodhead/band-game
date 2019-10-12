import React from "react";
import "./style.css";

function Nav (props) {
    return (
    <div>
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Clicky band game</a>
            </li>
            <li className="">{props.rightWrong}</li>
            <li>Score: {props.score}</li> 
            <li> Topscore: {props.topScore}</li>
        </ul>
    </nav>
    </div>
    );
}

export default Nav;