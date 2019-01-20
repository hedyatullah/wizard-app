import React, { Component } from 'react';



class BillingMethod extends Component{

	BillingMethod(){
	let activeClass = '';
		
}

    render(){
		let activeClass1 = '';
		let activeClass2 = '';
		let activeClass3 = '';
		console.log(this.props.data);
		if(this.props.data.selelctedBillingMethod == 'Direct bank transfer'){
			activeClass1 = 'active';

		}
		if(this.props.data.selelctedBillingMethod == 'Check payments'){
			activeClass2 = 'active';
		}
		if(this.props.data.selelctedBillingMethod == 'Cash on delivery'){
			activeClass3 = 'active';
		}

        return(
            <section>
				<div className="checkbox-circle">
					<label className={activeClass1}>
						<input type="radio" name="billing method" value="Direct bank transfer" checked={ (this.props.data.selelctedBillingMethod == 'Direct bank transfer') ? true : false} onChange={ (e)=> {
							this.props.storedData(e.target.value,'selelctedBillingMethod')
						}}/>Direct bank transfer
						<span className="checkmark"></span>
						<div className="tooltip">
							Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
						</div>
					</label>
					<label className={activeClass2}>
						<input type="radio" name="billing method" value="Check payments" checked={ (this.props.data.selelctedBillingMethod == 'Check payments') ? true : false} onChange={ (e) => {
							this.props.storedData(e.target.value,'selelctedBillingMethod')
						}} />Check payments
						<span className="checkmark"></span>
						<div className="tooltip">
							Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
						</div>
					</label>
					<label className={activeClass3}>
						<input type="radio" name="billing method" value="Cash on delivery" checked={ (this.props.data.selelctedBillingMethod == 'Cash on delivery') ? true : false} onChange={ (e) => {
							this.props.storedData(e.target.value,'selelctedBillingMethod')
						}} />Cash on delivery
						<span className="checkmark"></span>
						<div className="tooltip">
							Pay with cash upon delivery.
						</div>
					</label>
				</div>
	        </section>
        )
    }
}
export default BillingMethod;