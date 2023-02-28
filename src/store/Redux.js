import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {counter:0,showcounter:true}

const counterSlice= createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action ){
            state.counter = state.counter+action.payload

        },
        toggleCounter(state){
            state.showcounter=!state.showcounter
        }


    }
})

const initialAuthState = {
    isAuthenticated:false
}


const authSlice = createSlice({
    name:'Authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})
// const counterReducer = (state= initialState, action) => {
//     if(action.type === 'increment'){
//         return{
//             counter:state.counter +5,
//             showcounter:state.showcounter
//         }
//     }if(action.type === 'decrement'){
//         return{
//             counter:state.counter - 5,
//             showcounter:state.showcounter
//         }


//     }if(action.type ==='increase'){
//         return{
//             counter: state.counter+action.amount,
//             showcounter:state.showcounter

//         }
//     }
//     if(action.type==='toggle'){
//         return{
//             showcounter:!state.showcounter,
//             counter:state.counter


//         }
        
//     }
//     else{
//         return state
//     }
// }

//const Store = createStore( counterReducer)

const Store = configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default Store
