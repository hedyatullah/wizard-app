import React, {Component} from 'react';


class ProgressBar extends Component{

    render(){
        //console.log(this.props)
        return(
            <div>
                <ul role="tablist" className={this.props.ulClass}>
                {this.props.childComponent.map( (item,i)=> {
                    let checkedClass = "";
                    if(i <= this.props.pageIndex){
                        checkedClass = "first done checked"
                    }
                    return(
                        <li key={i} role="tab" aria-disabled="false" className={checkedClass} aria-selected="false">
              <a id="wizard-t-0" href="#" aria-controls="wizard-p-0" onClick={(e)=>{
                  this.props.progressbarClicked(item.componentName,i,(i == 0) ? '' : 'step-'+(i+1));
                  
            }}>
                <span className="number">{i}.</span> </a></li>
                    )
                })}
          
            </ul>
            </div>
        )
    }
}
export default ProgressBar;