import React, { Component } from 'react';
import './ContainerStyles.scss'
import restaurant from '../../Data/Locations.json'
class Recepe extends Component{
    constructor(props){
        super(props);
        this.state= restaurant;
    }
    componentDidMount(){
        console.log(this.state)
    }
    render(){
        return(
            <React.Fragment>
                <section className="item-pic">
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F12%2Fmain%2F2548201_lostc_0082.jpg%3Fitok%3DzarxKBWr"></img>
                    <div className="col">
                        <div><strong style={{fontSize: 25}}>{this.state.name}</strong></div>
                        <div><em>{this.state.location}</em></div>
                        {Object.entries(this.state.recepe[0].rating).map(
                            ([keyName, value])=><React.Fragment>
                                <div className="rating">
                                    <span>{value}</span>
                                </div>
                                <span>{keyName}</span>
                            </React.Fragment>
                        )}
                    </div>
                    <div className="container">
                        <div className="box">
                            <div className="start"><i class="fa fa-credit-card" ></i><span>₹ 40</span><br/>  
                            <span>Min. Holding Package</span></div>
                            <div className="start end"><i className="fa fa-motorcycle" ></i><span> 40 mins. </span><br/>  
                            <span>Serving Time</span></div>
                            <div className="end"><i className="fa fa-clock-o"></i><span> 12 - 20 hrs </span><br/>  
                            <span>Order Time</span></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Recepe