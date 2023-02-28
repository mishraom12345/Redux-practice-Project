import { createStore } from "redux";

const counterReducer = (state={counter:0}, action) => {
    if(action.type === 'increment'){
        return{
            counter:state.counter +5
        }
    }if(action.type === 'decrement'){
        return{
            counter:state.counter - 5
        }


    }if(action.type ==='increase'){
        return{
            counter: state.counter+action.amount
        }
    }
    
    else{
        return state
    }
}

const Store = createStore( counterReducer)

export default Store
