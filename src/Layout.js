import React from 'react';
import {Link} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Link to="/" className="button-go-to-back">Ir a atrás</Link>
            {children}
        </div>
    )
}

export default Layout;
