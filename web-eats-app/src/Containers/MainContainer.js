import React from 'react';
import Header from "../Components/HeaderComponent";
import '../index.scss'
import Recepe from './RecepeContainer';

export const MainContainer =()=>{
    return(
        <React.Fragment>
            <Header></Header>
            <input type="text"></input>
            <div className="container">
                <Recepe></Recepe>
            </div>
        </React.Fragment>
    )
}