import useFetch from "./useFetch";

const style = {
  container: "container py-6",
  heading: "font-bold text-3xl",
  button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 mr-2 rounded",
};

const Customcomp = () => {
  const [data] = useFetch("http://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <div className={style.container}>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </>
  );
};

export default Customcomp;
