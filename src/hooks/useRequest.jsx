import axios from "axios";
import { useState, useEffect } from 'react';

function useRequest (search) {
    const [apiData, setApiData] = useState([]);
    
    useEffect(() => {
        async function makeRequest(){
          try {
            if (search.length > 2) {
              const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
              setApiData(response.data);
            }
            if (search.length === 0) {
              setApiData([]);
            }
          } catch (error) {
            console.error(error);
          }
          
        }
        makeRequest();
      }, [search]);

    return apiData;
}

export default useRequest;