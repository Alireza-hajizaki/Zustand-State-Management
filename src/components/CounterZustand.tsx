import useCounterStore from "../store/zustand";

function CounterZustand() {
  const {counter,increment,reset,decrement} = useCounterStore();

  return (
    <>
      <div className="counter_container">
        <h2>Counter </h2>
        <span>{counter}</span>
        <div className="counter-box">
          <button onClick={() => decrement()}> - </button>
          <button onClick={() => reset()}>Reset</button>
          <button onClick={() => increment()}> + </button>
        </div>
      </div>
    </>
  );
}

export default CounterZustand;
