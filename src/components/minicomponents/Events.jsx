const Events = () => {
  const handleClick = (a, b) => {
    console.log(a + b);
  };

  const copyHandler = () => {
    console.log("Text copied!");
  };

  const moveHandler = () => {
    console.log("You hovered over the button!");
  };

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded" onClick={() => handleClick(2, 2)}>
        Click here
      </button>
      <h3 className="text-lg font-bold" onCopy={copyHandler}>
        Copy this text & take a look at the console 😉!
      </h3>
      <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 m-4 rounded" onMouseMove={moveHandler}>Hover Me</button>
    </>
  );
};

export default Events;
