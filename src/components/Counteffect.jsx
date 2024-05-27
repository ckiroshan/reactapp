import { useState, useEffect } from "react";

const Counteffect = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if (data && data.length) SetData(data);
    }

    getData();
  }, []);

  return (
    <>
      <div className="container py-6">
        <ul>
          {data.map((item) => (
            <li key={Math.random()}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Counteffect;
