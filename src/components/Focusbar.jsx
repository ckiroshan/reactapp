import { useRef } from "react";

const style = {
  container: "container py-6",
  heading: "font-bold text-3xl",
  inputContainer: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-800 sm:max-w-md",
  inputField: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
  button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 mx-2 rounded",
};

const Focusbar = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Kane";
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.inputContainer}>
          <input className={style.inputField} type="text" ref={inputElement} />
          <button className={style.button} onClick={() => focusInput()}>
            Focus & type Name
          </button>
        </div>
      </div>
    </>
  );
};

export default Focusbar;
