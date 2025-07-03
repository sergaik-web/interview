import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { decrement, increment, incrementByAmount } from "../store/counterSlice";

const ReduxCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increent</button>
        <button onClick={() => dispatch(decrement())}>Increent</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increent</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
