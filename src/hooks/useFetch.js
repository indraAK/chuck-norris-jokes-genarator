import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setData(null);
    setIsFetching(true);

    const controller = new AbortController();

    (async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("The user aborted a request.");
        } else {
          setData(null);
          setIsFetching(false);
        }
      } finally {
        setIsFetching(false);
      }
    })();

    return () => controller.abort();
  }, [url]);

  return { data, isFetching };
};

export default useFetch;
