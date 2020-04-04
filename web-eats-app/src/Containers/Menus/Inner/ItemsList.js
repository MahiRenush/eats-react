import React, { Component } from 'react';
import CartItems from './CartItems';
import restaurant from '../../../Data/Locations.json'

class ItemsList extends Component{
    state={
        dropped: true,
        fas: "fa fa-angle-up",
        ...restaurant
    }
    
    clickHandle=()=>{
        console.log(this.state)
        if(this.state.dropped)
            this.setState({dropped: !this.state.dropped, fas:"fa fa-angle-down"});
        else
            this.setState({dropped: !this.state.dropped, fas:"fa fa-angle-up"});
       
    }
    render(){
        return(<React.Fragment>
                
                {this.state.recepe[0].group.map((value, i)=> (
                   <div className="out">
                        <div className="title">
                            <span>{value.title}</span> 
                            <div className={this.state.fas} onClick={this.clickHandle}></div>
                        </div>
                        {value.items.map((content,ind)=><div className="content">
                            <div className="item">
                                <div style={{fontWeight: "bolder"}}>{content.name}</div>{content.desc}
                            </div><br/>
                            <div className="rate"><span>₹ {content.rate} </span>
                                <button className="btn btn-circ">+</button>
                            </div>
                        </div>)}
                    </div>
                ))}

            </React.Fragment>
        )
    }
}
export default ItemsList