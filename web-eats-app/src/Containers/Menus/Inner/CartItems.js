import React from 'react';

function CartItems(props){
    return(
        <div className="cart-items">
                <div className="spinner">
                    <div className="plus" name="i"><span>+</span></div>
                    <div name="i">{props.value}</div>
                    <div className="plus" name="i"><span>-</span></div>
                </div>
            <div>{props.text}</div>

            <div>
                <span style={{ fontWeight: "lighter" }}>₹ 100</span><br></br>
                <span><i className="fa fa-times-circle"></i></span>
            </div>
        </div>
    )
}
export default CartItems