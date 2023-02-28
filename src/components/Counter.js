import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const show = useSelector(state=>state.showcounter)

  const incrementhandler = ()=>{
    dispatch({type:'increment'})
  }

  const decrementhandler = ()=>{
    dispatch({type:'decrement'})
  }

  const increasehandler = ()=>{
    dispatch({type:'increase', amount:2})
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1> 
      {show&&<div className={classes.value}>{counter}</div>}
     <div>
       <button onClick={incrementhandler}>incremet by 5</button>
      <button onClick={increasehandler}>incremet by 2</button>
      <button onClick={decrementhandler}>decrement by 5</button>
     </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;