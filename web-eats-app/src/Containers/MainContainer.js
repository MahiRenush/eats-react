import React from 'react';
import Header from "../Components/HeaderComponent";
import '../index.scss'
import Recepe from './Recepe/RecepeContainer';
import {Desktags} from './Desktags/Desktags';

export const MainContainer =()=>{
    return(
        <React.Fragment>
            <Header></Header>
            <input type="text"></input>
            <div className="container">
                <Recepe></Recepe>
                <Desktags></Desktags>
            </div>
            
        </React.Fragment>
    )
}