import React, { Component } from 'react';
import './MenuStyles.scss';
import CartItems from './Inner/CartItems'
import ItemsList from './Inner/ItemsList';

export default class Order extends Component {
    render() {
        return (<React.Fragment>
            <div className="container">
                <div className="text-pad">
                    <span>Set Menu</span>
                    <span>Show Menu</span>
                    <span>Hide Menu</span>
                    <span></span><span></span>
                </div>
                <div className="division">
                    <div className="first">
                        <ItemsList></ItemsList>
                    </div>
                    <div className="sec">
                        <div>
                            <span style={{ float: "left", fontSize: "18px", fontWeight: "bolder" }}>My cart</span>
                            <span style={{ float: "right", fontSize: "15px", color: "#6a666a" }}>Clear</span>
                        </div>
                        
                        <CartItems text={"This is a italian cuisine Kebap and this would really be good."} value={1} price={100}/>
                        <CartItems text={"A variety dish that would taste really good."} value={2} price={40}/>

                        <span>Hide Menu</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}