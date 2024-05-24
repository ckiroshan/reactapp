const Userprops = (props) => {
  return (
    <>
      <img src={props.img} alt={props.name} />
      <h1>Name: {props.name}</h1>
      <h3>Hobbies: {props.hobbies}</h3>
    </>
  );
};

export default Userprops;
