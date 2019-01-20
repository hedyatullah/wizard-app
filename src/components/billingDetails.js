import React, {Component} from 'react';

class BillingDetails extends Component{	
    render(){
		console.log(this.props.data)
		console.log(this.props.storedData)
        return(			
            <section>					
	            <div className="form-row form-group">
					<div className="form-holder">
						<label >
							First Name *
						</label>
						<input type="text" className="form-control" value={this.props.data.first_name} onChange={ (e)=> {
							this.props.storedData(e.target.value,'first_name')
						}}/>
					</div>
					<div className="form-holder">
						<label >
							Last Name *
						</label>
						<input type="text" className="form-control" value={this.props.data.last_name} onChange={ (e)=> {
							this.props.storedData(e.target.value,'last_name')
						}}/>
					</div>
	            </div>	
	                    
				<div className="form-row">
					<label >
						Company Name
					</label>
	                <input type="text" className="form-control" value={this.props.data.company_name} onChange={ (e) => {
						this.props.storedData(e.target.value,'company_name')
					}}/>
	            </div>	
	            <div className="form-row">
					<label >
						Country *
					</label>
	                    	
						<div className="form-holder">
							<select name="" id="" className="form-control" value={this.props.data.country} onChange={ (e) => {
								this.props.storedData(e.target.value,'country')
							}}>
								<option value="India" className="option">India</option>
								<option value="united states" className="option">United States</option>
								<option value="united kingdom" className="option">United Kingdom</option>
							</select>
							<i className="zmdi zmdi-caret-down"></i>
						</div>
	            </div>	
	                    <div className="form-row">
	                    	<label>
	                    		Address *
	                    	</label>
	                    	<input type="text" className="form-control" placeholder="Street address" style={{marginBottom: "20px"}} value={this.props.data.address1} onChange={ (e) => {
								this.props.storedData(e.target.value,'address1')
							}}/>
	                    	<input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" value={this.props.data.address2} onChange={ (e) => {
								this.props.storedData(e.target.value,'address2')
							}} />
	                    </div>	
	                    <div className="form-row">
	                    	<label>
	                    		Town / City *
	                    	</label>
	                    	<input type="text" className="form-control" value={this.props.data.town} onChange={ (e) => {
								this.props.storedData(e.target.value,'town')
							}} />
	                    </div>						
	                </section>			
        )
    }
}
export default BillingDetails;