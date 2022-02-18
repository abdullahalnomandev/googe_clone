// import axios from "axios";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";
export const ResultsContexts = createContext();

export const ResultsContext = ({ children }) => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("Bangladesh");
  const [loading, setisLoading] = useState(false);
  const [dark,setDark]=useState(false)
  const requestResult = async (type) => {
    setisLoading(true)
    try {
      const response = await axios.get(
        `https://google-search3.p.rapidapi.com/api/v1${type}`,
        {
          headers: {
            "x-user-agent": "desktop",
            "x-proxy-location": "EU",
            "x-rapidapi-host": "google-search3.p.rapidapi.com",
            "x-rapidapi-key":
              "cb515d828dmshcac828fbec9b844p12cc7fjsnbd898cd25ad1",
          },
        }
      );
      const data = response.data;
      setResults(data);
      console.log(data);
      setisLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ResultsContexts.Provider
      value={{ loading,results, setSearch, search, requestResult ,setDark,dark}}
    >
      {children}
    </ResultsContexts.Provider>
  );
};

export const useResultContext = () => useContext(ResultsContexts);
