import axios from "axios";
import { useState, useEffect } from 'react';

function useRequestNew (url) {
    const [apiData, setApiData] = useState([]);
    
    useEffect(() => {
        async function makeRequest(){
            try {
              const response = await axios.get(url , {
                params: {
                  language:'en-US',
                  api_key:'33584e6a5217392f99d9ce3ecf5ba429',
                }
              });
              setApiData(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }
        makeRequest();
      },[url]);

    return apiData;
}

export default useRequestNew;