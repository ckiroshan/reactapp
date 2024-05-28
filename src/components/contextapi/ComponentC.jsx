import { Data } from "../../App";
import { useContext } from "react";

const style = {
  heading: "text-3xl",
};

const ComponentC = () => {
  const name = useContext(Data);

  return (
    <>
      <h1>
        <h1 className={style.heading}>My name is: {name}</h1>;
      </h1>
    </>
  );
};

export default ComponentC;
