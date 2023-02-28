import { createStore } from "redux";
const initialState = {counter:0,showcounter:true}
const counterReducer = (state= initialState, action) => {
    if(action.type === 'increment'){
        return{
            counter:state.counter +5,
            showcounter:state.showcounter
        }
    }if(action.type === 'decrement'){
        return{
            counter:state.counter - 5,
            showcounter:state.showcounter
        }


    }if(action.type ==='increase'){
        return{
            counter: state.counter+action.amount,
            showcounter:state.showcounter

        }
    }
    if(action.type==='toggle'){
        return{
            showcounter:!state.showcounter,
            counter:state.counter


        }
        
    }
    else{
        return state
    }
}

const Store = createStore( counterReducer)

export default Store
