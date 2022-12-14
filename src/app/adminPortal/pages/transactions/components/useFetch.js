import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let subscribe = true;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        if (subscribe) {
          
          setFetchedData(data);
          // setLoading(false);
          // console.log("try loadin", loading)
        }
      } catch (error) {
        // setLoading(false);
        if (error.response) {
          console.log(`Error getting data from ${url}`, error.response);
        } else {
          console.log("No server connection established");
        }
      } finally {
        setLoading(false)
      }
    };
    //Call the fetchData function
    fetchData();

    return () => {
      subscribe = false;
    };
  }, [url]);
  return { fetchedData, loading };
};
