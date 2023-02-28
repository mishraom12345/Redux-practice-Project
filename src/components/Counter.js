import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()

  const incrementhandler = ()=>{
    dispatch({type:'increment'})
  }

  const decrementhandler = ()=>{
    dispatch({type:'decrement'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1> 
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementhandler}>incremet by 5</button>
      <button onClick={decrementhandler}>decrement by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;