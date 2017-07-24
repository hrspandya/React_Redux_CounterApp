import React, {Component} from 'react';

export default class Counter extends Component{
	
	render(){
			
		let increment = this.props.increment;
		let decrement = this.props.decrement;
		let count = (this.props.count != null && this.props.count.constructor == Object) ? 0 : this.props.count;
		
		return (
			<div className="counterWrapper">
				<div className="counterNum">
					{count}
				</div>
				<input type="button" value="Increment" onClick={(e) => increment()}/>
				<input type="button" value="Decrement" onClick={(e) => decrement()}/>
			</div>
		);
	}
}