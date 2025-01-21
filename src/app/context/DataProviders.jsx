"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [csvData, setCsvData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmM3pJjdbtY4aZmsvRdIxJ-bmLfAV3EPksP-ote9ue4TeALr4qeeHgRr0HhWLL4kMSoZS5EJBb1dpB/pub?output=csv";

    Papa.parse(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setCsvData(results.data);
        setIsLoading(false);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
        setError(error.message);
        setIsLoading(false);
      },
    });
  }, []);

  return (
    <DataContext.Provider value={{ csvData, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
