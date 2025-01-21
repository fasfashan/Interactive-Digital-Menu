"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function FetchCSVData(props) {
  const [csvData, setCsvData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = () => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkqeLVn4bzzrj3e02VEX-GAt5LVLwymMY5RGkVZOpbPpH3GAHBY-eEBLSGr_28MvkULZw1oIInaC2v/pub?output=csv";

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
  };

  const isValidURL = (url) => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  return (
    <>
      <div className="  items-start justify-start space-y-2 bg-[url('/hero-bg.jpg')] h-[400px] bg-cover bg-center bg-no-repeat">
        <div className=" space-y-6  max-w-5xl m-auto">
          <h1 className="font-bold text-7xl max-w-2xl leading-tight pt-20 text-white">
            Butuh copy di sebelah sini!
          </h1>
          <button
            type="button"
            className="px-6 font-semibold bg-white border border-neutral-300 shadow-inner py-2 w-fit rounded mt-4"
          >
            Lihat menu
          </button>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">CSV Data</h1>
        {isLoading ? (
          <p className="text-gray-500 text-center py-4">Loading data...</p>
        ) : csvData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  {Object.keys(csvData[0]).map((header, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 border border-gray-300"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    {Object.entries(row).map(([key, value], colIndex) => (
                      <td key={colIndex} style={{ padding: "8px" }}>
                        {key === "Image" && isValidURL(value) ? ( // Validasi URL
                          <img
                            src={value}
                            alt={`Image ${rowIndex + 1}`}
                            style={{ width: "100px", height: "auto" }}
                          />
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No data available</p>
        )}
      </div>
    </>
  );
}
