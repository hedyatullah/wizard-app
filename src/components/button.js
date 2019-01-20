import React, { Component } from 'react'
import Summary from './summary'

class Button extends Component{
    constructor(){
        super();
        this.getButton = this.getButton.bind(this)
    }
    getButton(){        
        let len= this.props.childComponent.length;
        let nextButton = '';
        let prevButton = '';
        let placeHolderButton = '';

        if(this.props.pageIndex == 0) {
            prevButton = 'true';
            placeHolderButton = 'true';
        } else if ((len-2) == this.props.pageIndex) {
            nextButton = 'true';
        } else if ((len-1) == this.props.pageIndex) {
            nextButton = 'true';
            placeHolderButton = 'true';
        } 
        else {
            placeHolderButton = 'true';
        } 

        return(
            <div className="actions clearfix">
            <ul role="menu" aria-label="Pagination" className="">                    
                <li className="disabled" aria-disabled={prevButton} onClick={()=> {                       
                        this.props.buttonClicked(this.props.pageIndex-1)
                    }}>
                    <a href="#previous" role="menuitem">Previous</a>
                </li>
                <li aria-hidden="false" aria-disabled={nextButton} className="" style={{}}>
                    <a href="#next" role="menuitem" onClick={()=> {                       
                        this.props.buttonClicked(this.props.pageIndex+1)
                    }}>Next</a>
                </li> 
                <li aria-disabled={placeHolderButton}>
                    <a href="#finish" role="menuitem" onClick={ () => {
                        this.props.buttonClicked(this.props.pageIndex+1)
                    }}>Place Holder</a>
                </li>
            </ul>
        </div>
        )       
          
    }
    callSummary(){
        
    }
    render(){
        return(
            this.getButton()
        )
    }
}
export default Button;