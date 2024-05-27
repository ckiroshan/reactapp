import { Data } from "../../App";

const style = {
  heading: "text-3xl",
};

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return <h1 className={style.heading}>My name is: {name}</h1>;
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
