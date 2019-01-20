import React, { Component } from 'react';

class Summary extends Component {
    getTmpl(data) {
        return (<div className="item">
                <p className="item-name">{data.label}: </p>
                <p className="item-description">{data.value}</p>
        </div>);
    }
    render() {
        let dataArray = [];
        this.props.childComponent.map((item,i) => {
            Object.keys(item.data).map((data,key) => {
                dataArray.push(this.getTmpl({label: data, value: item.data[data]}));   
            })                   
        });
        return dataArray;
    }
    render_bkp(){
        console.log(this.props.childComponent[1].data)
        //console.log()
        let dataArray= [];
        this.props.childComponent.map((item,i) => {                    
                    
            Object.keys(item.data).map((data,key) => {
            console.log(item.data[data])   
            dataArray.push(item.data[data])                                     
            })                   
        })
        console.log(dataArray)
        return(
            <div>                
                <h3 className="title">Billing Details</h3>
                    <div className="item">   
                    <p className="item-name">FirstName: </p>
                    <p className="item-description">{this.props.childComponent[0].data.first_name}</p>  
                    </div>
                    <div className="item">                        
                            <p className="item-name">Last Name: </p>
                            <p className="item-description">{this.props.childComponent[0].data.last_name}</p>
                    </div>
                    <div className="item">                        
                            <p className="item-name">Company Name: </p>
                            <p className="item-description">{this.props.childComponent[0].data.company_name}</p>
                    </div><div className="item">                        
                            <p className="item-name">Country: </p>
                            <p className="item-description">{this.props.childComponent[0].data.country}</p>
                    </div>
                    <div className="item">                        
                            <p className="item-name">Address: </p>
                            <p className="item-description">{this.props.childComponent[0].data.address1} {this.props.childComponent[0].data.address2}</p>
                    </div>
                    <div className="item">                        
                            <p className="item-name">Town</p>
                            <p className="item-description">{this.props.childComponent[0].data.town}</p>
                    </div>

                <h3 className="title">Additional Information</h3>
                    <div className="item">                        
                            <p className="item-name">Country Name: </p>
                            <p className="item-description">{this.props.childComponent[1].data.country}</p>
                    </div>
                    <div className="item">                        
                            <p className="item-name">Postcode / Zip: </p>
                            <p className="item-description">{this.props.childComponent[1].data.postcode}</p>
                    </div>
                    <div className="item">                        
                            <p className="item-name">Phone No.: </p>
                            <p className="item-description">{this.props.childComponent[1].data.phone}</p>
                    </div>
                    <div className="item">                        
                            <p className="item-name">Email Address: </p>
                            <p className="item-description">{this.props.childComponent[1].data.email}</p>
                    </div>
                    <div className="item">
                            <p className="item-name">Order Notes: </p>
                            <p className="item-description">{this.props.childComponent[1].data.orderNotes}</p>
                    </div>
                    
                <h3 className="title">Payment Option</h3>
                    <div className="item">                        
                            <p className="item-name">Payment Mode: </p>
                            <p className="item-description">{this.props.childComponent[3].data.selelctedBillingMethod}</p>
                    </div>    
            </div>
        )
    }
}
export default Summary;