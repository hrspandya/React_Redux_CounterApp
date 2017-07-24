import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import Counter from '../components/counter';


class CounterContainer extends Component{
	
	constructor(props){
    	super(props);	
    	this.state = {};      
	}

	render(){		
		return <Counter count={this.props.count} increment={this.props.increment} decrement={this.props.decrement} />;
	}
}

function mapStateToProps(state) {
    return {
        count: state.counter_reducer
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);