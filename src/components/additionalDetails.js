import React, {Component } from 'react';


class AdditionalDetails extends Component {
    render(){
        return(
            <section>
				<div className="form-row">
					<label>
						County *
					</label>
					<input type="text" className="form-control" value={this.props.data.country} onChange={ (e) => {
						this.props.storedData(e.target.value,'country')
					}} />
				</div>
				<div className="form-row">
					<label>
						Postcode / Zip *
					</label>
					<input type="text" className="form-control" value={this.props.data.postcode} onChange={ (e) => {
						this.props.storedData(e.target.value,'postcode')
					}} />
				</div>
				<div className="form-row form-group">
					<div className="form-holder">
						<label>
						Phone *
						</label>
						<input type="text" className="form-control" value={this.props.data.phone} onChange={ (e) => {
							this.props.storedData(e.target.value,'phone')
						}} />
					</div>
					<div className="form-holder">
						<label>
						Email Address *
						</label>
						<input type="text" className="form-control" value={this.props.data.email} onChange={ (e) => {
							this.props.storedData(e.target.value,'email')
						}} />
					</div>
				</div>	
				<div className="form-row" style={{marginBottom: "18px"}}>
					<label>
						Order Notes
					</label>
					<textarea name="" id="" className="form-control" placeholder="Note about your order, eg. special notes fordelivery." style={{height: "149px"}} value={this.props.data.orderNotes} onChange={ (e) => {
						this.props.storedData(e.target.value,'orderNotes')
					}} ></textarea>
				</div>
				<div className="checkbox">
					<label>
						<input type="checkbox" checked={this.props.data.accountChecked} onChange={ (e) => {
							this.props.storedData(e.target.checked,'accountChecked')
						}} /> Create an account?
						<span className="checkmark"></span>
					</label>
				</div>
	                </section>
        )
    }
}
export default AdditionalDetails;