import React from 'react';
import {Link} from "react-router-dom";
import "./MainMenu.css";

const options = [
    {
        name: "Render props",
        path: "/render-props"
    },
    {
        name: "Patrón factory",
        path: "/factory"
    }
];

const MainMenu = () => {
    return (
        <div className="main-menu">
            <h3 className="main-menu__title">Seleccione una de las opciones:</h3>

            <ul className="menu" style={{gridTemplateColumns: `repeat(${options.length}, 1fr)`}}>
                {options.map(({name, path}) => (
                    <li className="menu__item" key={path}>
                        <Link className="menu__link" to={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MainMenu;
