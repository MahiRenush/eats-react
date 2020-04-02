import React, {Component} from 'react';
import './styles.scss';

class Dropdown extends Component{
    constructor(props){
        super(props);
    }
    state={
        dropped :false,
        fas: "fa fa-angle-down"
    }
    clickHandle=()=>{
        if(this.state.dropped)
            this.setState({dropped: !this.state.dropped, fas:"fa fa-angle-down"});
        else
            this.setState({dropped: !this.state.dropped, fas:"fa fa-angle-up"});
    }

    render(){
        return(
            <React.Fragment>
                <div className="dropdown" onClick={this.clickHandle}>
                   Hello, {this.props.user}<i className={this.state.fas} aria-hidden="true"></i>
                </div>
                {this.state.dropped && <div className="dropdown-content">dsbckhcb</div>}
            </React.Fragment>
        )
    }
}
export  default Dropdown