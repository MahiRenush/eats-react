import React from 'react';
import './desk.scss'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
export const Desktags=()=>{
    return(
        <React.Fragment>
            <Router>
            <div className="nav">
                <ul>
                    <NavLink to="/order"className="link" activeClassName="active">Order</NavLink>
                    <NavLink to="/info"className="link" activeClassName="active">Information</NavLink>
                    <NavLink to="/eat"className="link" activeClassName="active">Eat</NavLink>
                </ul>   
            </div>
            </Router>
            
        </React.Fragment>
    )
}