"use client";
import { useData } from "@/app/context/DataProviders";
import HeroSection from "./components/HeroSection";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FetchCSVData() {
  const { csvData, isLoading, error } = useData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
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

  // Sort categories alphabetically, keeping "All" at the beginning
  const categories =
    csvData.length > 0
      ? ["All", ...new Set(csvData.map((item) => item.Category))].sort(
          (a, b) => {
            if (a === "All") return -1;
            if (b === "All") return 1;
            return a.localeCompare(b);
          }
        )
      : [];

  // Filter and sort items based on selected category
  const filteredItems = (
    selectedCategory === "All"
      ? [...csvData]
      : csvData.filter((item) => item.Category === selectedCategory)
  ).sort((a, b) => a["Menu Name"].localeCompare(b["Menu Name"]));

  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  const categoryIcons = {
    All: "/all.svg",
    "Ala Carte": "/ala-carte.svg",
    Beverages: "/beverages.svg",
    "Combo Menu": "/combo-menu.svg",
    Dessert: "/desert.svg",
  };

  return (
    <>
      <HeroSection />
      <div className="flex gap-4 max-w-5xl px-3 m-auto mt-10">
        {/* Sidebar */}
        <div className="w-64 bg-white border border-neutral-200 rounded-md p-4 h-fit sticky top-20">
          <ul className="space-y-2">
            {categories
              .filter((category) => category && category.trim() !== "")
              .map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer hover:bg-red-100 rounded-md p-2 flex items-center text-black ${
                    selectedCategory === category
                      ? "bg-red-100 rounded-md font-semibold"
                      : "text-neutral-500"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <img
                    src={categoryIcons[category] || "/default.svg"}
                    alt={category}
                    className={`h-5 w-5 mr-2 ${
                      selectedCategory === category
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  />
                  {category}
                </li>
              ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {isLoading ? (
            <div>Loading data...</div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {filteredItems.map((item, index) => (
                <Link
                  href={`/menu/${createSlug(item["Menu Name"])}`}
                  key={index}
                  className="border p-4 rounded-lg text-center block hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/${item["Menu Name"]}.png`}
                    alt={item["Menu Name"]}
                    className="w-full h-fit object-cover mb-2"
                    onError={(e) => {
                      e.target.src = "/placeholder.png";
                    }}
                  />
                  <h3 className="font-medium">{item["Menu Name"]}</h3>
                  <p className="text-primary font-bold">{item.Price}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
