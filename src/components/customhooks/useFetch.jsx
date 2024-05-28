import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, SetData] = useState(null);

  // 1. Promise chaining on useEffect
  // useEffect(() => {
  //   fetch(url)
  //     .then((r) => r.json())
  //     .then((d) => SetData(d));
  // }, [url]);

  // 2. Async Await on useEffect
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.length) SetData(data);
    }

    getData();
  }, [url]);

  return [data];
};

export default useFetch;
