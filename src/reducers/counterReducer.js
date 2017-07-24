

export default function CounterApp(state = 0, action){
	if(action.type == "INCREMENT"){
		return state = state + 1;
	}else if(action.type == "DECREMENT"){
		return state = state - 1;
	}else{
		//do nothing
	}
	return state;
}