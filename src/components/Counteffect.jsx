import { useState, useEffect } from "react";

const style = {
  container: "container py-6 flex",
  heading: "font-bold text-3xl flex",
  button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 ml-4 rounded",
};

const Counteffect = () => {
  const [value, SetValue] = useState(0);

  useEffect(() => {
    console.log("Hey there...");
    document.title = `Count: ${value}`;
  },[value]);

  const handleValue = () => SetValue(value + 1);


  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>{value}</h1>
        <button onClick={handleValue} className={style.button}>
          +
        </button>
      </div>
    </>
  );
};

export default Counteffect;
