import { useState, useEffect } from "react";
import axios from "axios"

export const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(url);
        setFetchedData(data)
        setLoading(false)
      } catch(error) {
        setLoading(false)
        if(error.response) {
          console.log(`Error getting data from ${url}`, error.response)
        } else {
          console.log("No server connection established")
        }
      }
    }

    //Call the fetchData function
    fetchData();
  }, [url])
  return { fetchedData, loading }
}