import { useReducer } from "react";

const style = {
  container: "container py-6",
  heading: "font-bold text-3xl",
  button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 mr-2 rounded",
};

const Reducecounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>{state.count}</h1>
        <button className={style.button} onClick={() => dispatch({ type: "increment" })}>
          +
        </button>
        <button className={style.button} onClick={() => dispatch({ type: "decrement" })}>
          -
        </button>
        <button className={style.button} onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </>
  );
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default Reducecounter;
