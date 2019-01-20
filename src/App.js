import React, { Component } from 'react';

import BillingDetails from './components/billingDetails';
import AdditionalDetails from './components/additionalDetails';
import YourOrder from './components/yourOrder';
import BillingMethod from './components/billingMethod';
import ProgressBar from './components/progressbar';
import Button from './components/button';
import Summary from './components/summary';

class App extends Component {
  constructor(){
    super();
    this.state = {      
      activeComponentName: 'billingDetails',
      ulClass: '',
      pageIndex: 0,
      buttonClass: false,
      summaryPage: false,
      childComponent: [
        {componentName: BillingDetails, label:'Billing Details', data:{first_name:'', last_name:'',company_name:'', country:'',address1:'',address2:'', town:''}},
        {componentName: AdditionalDetails, lable: 'Additional Details', wrapperUl:'step-2', data:{country:'',postcode:'',phone:'',email:'',orderNotes:'', accountChecked:false}},
        {componentName: YourOrder, label: 'Your Order', wrapperUl:'step-3', data:{}},
        {componentName: BillingMethod, label: 'Billing Method', wrapperUl:'step-4', data:{selelctedBillingMethod:'Direct bank transfer'}},
        {componentName: Summary, label: 'Final Page', data:{}}
      ]
    }
    this.progressbarClicked = this.progressbarClicked.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.storedData = this.storedData.bind(this)
    this.callSummaryPage = this.callSummaryPage.bind(this);    
  }

  callSummaryPage(){
    console.log('placeholder clicked..')
    this.setState({
      summaryPage: true
    })
    return <Summary />
  }
  
  storedData(data,key){
    console.log(data,key);
    let childData = this.state.childComponent[this.state.pageIndex].data;
    childData[key] = data;
    let newState = this.state.childComponent;
    newState[this.state.pageIndex].data = childData;    
    this.setState({
      childComponent: newState
    })
  }

  buttonClicked(pageIndex){
    this.setState({
      pageIndex
    }) 
  }
  progressbarClicked(clickedComponent,index,wrapperUl){
    console.log(wrapperUl)
    let activeComponentName = clickedComponent;
    let steps = this.state.childComponent;
    for(let j=0;j<steps.length;j++){
      delete steps[j].active;
    }
    for(let i=0;i<=index;i++){
      steps[i].active = true;        
    }
    //steps[index].wrapperUl = wrapperUl;
    this.setState({
      activeComponentName: activeComponentName,
      childComponent: steps,
      ulClass:wrapperUl,
      pageIndex:index
      })
  }
  render() {
    return (
      <div  className="wrapper">
        <div className="image-holder">
				  <img src="/images/form-wizard.png" alt="" />
			  </div>
        <form action="">
          <div id="wizard" className="wizard">
          <div className="steps clearfix">
            <ProgressBar 
              childComponent={this.state.childComponent} 
              progressbarClicked={this.progressbarClicked}
              ulClass={(this.state.pageIndex == 0) ? '' : 'step-'+(this.state.pageIndex+1)}
              pageIndex={this.state.pageIndex}
            />
          </div>
          {this.getComponent()}          
          <Button 
            childComponent={this.state.childComponent}
            pageIndex={this.state.pageIndex}
            buttonClicked={this.buttonClicked}
            buttonClass={this.state.buttonClass}
            callSummaryPage={this.callSummaryPage}            
          />
          </div>          
        </form>
        
      </div>
    )
  }
  getComponent(){
    let ComponentName = this.state.childComponent[this.state.pageIndex].componentName;
    return <ComponentName data={
        this.state.childComponent[this.state.pageIndex].data} 
        storedData={this.storedData}
        childComponent={this.state.childComponent}
        />    
  }
}

export default App;
