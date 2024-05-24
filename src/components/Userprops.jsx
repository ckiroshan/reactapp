const Userprops = ({ img, name, hobbies, children }) => {
  return (
    <>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h3>Hobbies: {hobbies}</h3>
      {children} {/* children word can't change, else code won't work */}
    </>
  );
};

export default Userprops;
