"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <div className="min-h-96 bg-gray-100 animate-pulse"></div>,
});

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: "Murni Resto - Jakarta Pusat",
      address: "Jl. MH Thamrin No. 123",
      coordinates: [-6.1751, 106.865],
      hours: "10:00 - 22:00",
      image: "/murni-resto-jakarta.jpg",
    },
    {
      id: 2,
      name: "Murni Resto - Bandung",
      address: "Jl. Braga No. 45",
      coordinates: [-6.9175, 107.6191],
      hours: "10:00 - 22:00",
      image: "/murni-resto-bandung.jpg",
    },
    {
      id: 3,
      name: "Murni Resto - Surabaya",
      address: "Jl. Tunjungan No. 78",
      coordinates: [-7.2575, 112.7521],
      hours: "10:00 - 22:00",
      image: "/murni-resto-surabaya.jpg",
    },
    {
      id: 4,
      name: "Murni Resto - Yogyakarta",
      address: "Jl. Malioboro No. 90",
      coordinates: [-7.7956, 110.3695],
      hours: "10:00 - 22:00",
      image: "/murni-resto-yogyakarta.jpg",
    },
    {
      id: 5,
      name: "Murni Resto - Semarang",
      address: "Jl. Pemuda No. 56",
      coordinates: [-6.9932, 110.4203],
      hours: "10:00 - 22:00",
      image: "/murni-resto-jakarta.jpg",
    },
    {
      id: 6,
      name: "Murni Resto - Medan",
      address: "Jl. Asia No. 234",
      coordinates: [3.5952, 98.6722],
      hours: "10:00 - 22:00",
      image: "/murni-resto-jakarta.jpg",
    },
    {
      id: 7,
      name: "Murni Resto - Bali",
      address: "Jl. Kuta Beach No. 167",
      coordinates: [-8.7199, 115.1707],
      hours: "10:00 - 22:00",
      image: "/murni-resto-jakarta.jpg",
    },
    {
      id: 8,
      name: "Murni Resto - Makassar",
      address: "Jl. Panakkukang No. 89",
      coordinates: [-5.1477, 119.4327],
      hours: "10:00 - 22:00",
      image: "/murni-resto-jakarta.jpg",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const initialCenter = [-2.5489, 118.0149]; // Center of Indonesia

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <div className="max-w-5xl m-auto p-4">
        <Link
          href="/"
          className="text-primary pt-10 font-semibold hover:underline flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0303 3.96967C11.3232 4.26256 11.3232 4.73744 11.0303 5.03033L4.81066 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H4.81066L11.0303 18.9697C11.3232 19.2626 11.3232 19.7374 11.0303 20.0303C10.7374 20.3232 10.2626 20.3232 9.96967 20.0303L2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L9.96967 3.96967C10.2626 3.67678 10.7374 3.67678 11.0303 3.96967Z"
              fill="#C12126"
            />
          </svg>
          Kembali ke Menu
        </Link>
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-12 min-h-96 z-9 container">
            <Map
              locations={locations}
              selectedLocation={selectedLocation}
              initialCenter={initialCenter}
              onLocationSelect={handleLocationClick}
            />
          </div>
          <div className="col-span-12 mt-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Our stores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className={`p-4 border space-y-4 h-fit rounded-lg cursor-pointer transition-colors ${
                      selectedLocation?.id === location.id
                        ? "bg-red-100 border-red-300"
                        : "hover:bg-red-50"
                    }`}
                    onClick={() => handleLocationClick(location)}
                  >
                    <img
                      className="rounded-md w-full"
                      src={location.image}
                      alt=""
                    />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm">{location.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {location.address}
                      </p>
                      <p className="text-sm text-gray-500">
                        Hours: {location.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
