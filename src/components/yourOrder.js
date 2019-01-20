import React, { Component } from 'react';

class YourOrder extends Component{
    render(){
        return(
            <div>
				<section id="wizard-p-2" role="tabpanel" aria-labelledby="wizard-h-2" className="body" aria-hidden="true">
					<div className="product">
						<div className="item">
							<div className="left">
								<a href="#" className="thumb">
									<img src="images/item-1.png" alt="" />
								</a>
								<div className="purchase">
									<h6>
										<a href="#">Low Table/Stool</a>
									</h6>
									<span>x4</span>
								</div>
							</div>
							<span className="price">$29</span>
						</div>
						<div className="item">
							<div className="left">
								<a href="#" className="thumb">
									<img src="images/item-2.png" alt="" />
								</a>
								<div className="purchase">
									<h6>
										<a href="#">Set of 3 Porcelain</a>
									</h6>
									<span>x2</span>
								</div>
							</div>
							<span className="price">$124</span>
						</div>
					</div>
					<div className="checkout">
						<div className="subtotal">
							<span className="heading">Subtotal</span>
							<span>$364</span>
						</div>
						<p className="shipping">
							<span className="heading">Shipping</span>
						there are no shipping methods available. please double check your address, or contact us if you need any help.
						</p>
						<div className="total">
							<span className="heading">Subtotal</span>
							<span className="total-price">$364</span>
						</div>
					</div>
				</section>
            </div>
        )
    }
}
export default YourOrder;