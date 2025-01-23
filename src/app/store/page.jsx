"use client";

import MapComponent from "@/app/store/Map";

export default function LocationPage() {
  const locations = [
    {
      id: 1,
      name: "Murni Resto - Duri Kosambi",
      address: "Jl. Lkr. Luar Barat No.1, RT.7/RW.6, Duri Kosambi",
      coordinates: [106.72643188844603, -6.161330325208144], // [longitude, latitude]
      contact: "+62 21 1234567",
      image: "/murni-resto-jakarta.jpg",
      openHours: "09:00 - 23:00",
    },
    {
      id: 2,
      name: "Murni Resto - Meruya",
      address: "Rukan Taman Meruya, Blok M No.41-43 A, Meruya Utara0",
      coordinates: [106.73938178290035, -6.192115768994093],
      contact: "+62 21 7654321",
      image: "/murni-resto-bandung.jpg",
      openHours: "08:00 - 22:00",
    },
    {
      id: 3,
      name: "Murni Resto - Depok",
      address: "Jl. Margonda No.56, Depok, Kec. Pancoran Mas",
      coordinates: [106.82364731843724, -6.392299383128017],
      contact: "+62 21 9876543",
      image: "/murni-resto-semarang.jpg",
      openHours: "09:00 - 23:00",
    },
    {
      id: 4,
      name: "Murni Resto - Bogor",
      address: "Jl. Nasional 11, RT.05/RW.09, Kedung Jaya4",
      coordinates: [106.7851626235993, -6.558406520012516],
      contact: "+62 251 6543210",
      image: "/murni-resto-surabaya.jpg",
      openHours: "10:00 - 24:00",
    },
    {
      id: 5,
      name: "Murni Resto - Bekasi",
      address: "Jl. Ahmad Yani No.Kav. 1, RT.005/RW.002, Pekayon Jaya",
      coordinates: [106.98992158381697, -6.25423484700718],
      contact: "+62 21 5432109",
      image: "/murni-resto-yogyakarta.jpg",
      openHours: "08:00 - 22:00",
    },
    {
      id: 6,
      name: "Murni Resto - Kemang",
      address: "Cilandak, Jl. Puri Mutiara Raya No.35D, RT.9/RW.11",
      coordinates: [106.8118085818936, -6.276631432024719],
      contact: "+62 21 27529",
      image: "/murni-resto-kemang.jpg",
      openHours: "08:00 - 22:00",
    },
  ];

  const initialCenter = [106.8456, -6.2088]; // koordinat pusat peta

  const handleLocationSelect = (location) => {
    console.log("Selected location:", location);
    // Handle location selection
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center m-auto text-4xl font-semibold mt-10 mb-10">
        Temukan Murni Resto di dekatmu
      </h1>
      <MapComponent
        locations={locations}
        selectedLocation={null}
        initialCenter={initialCenter}
        onLocationSelect={handleLocationSelect}
      />
      {/* <div className="overflow-x-auto mt-10">
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left">
          <thead className="bg-primary">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-white">
                No
              </th>
              <th className="border border-gray-300 px-4 py-2 text-white">
                Nama Lokasi
              </th>
              <th className="border border-gray-300 px-4 py-2 text-white">
                Detail Lokasi
              </th>

              <th className="border border-gray-300 px-4 py-2 text-white">
                Kontak
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {location.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {location.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {location.address}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {location.contact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="grid grid-cols-3 mt-10 gap-4">
        {locations.map((location) => (
          <div
            className="p-4 border space-y-4 border-neutral-200 rounded-lg"
            key={location.id}
          >
            <img
              src={location.image}
              alt={location.name}
              className="rounded-md"
            />
            <div className="space-y-1">
              <h1 className="font-semibold">{location.name}</h1>
              <p className="text-sm text-neutral-600">{location.address}</p>
            </div>

            <div className="flex flex-col gap-2 ">
              <div className="flex gap-2 items-center">
                <img
                  className="opacity-40"
                  width={16}
                  src="/phone.svg"
                  alt="phone"
                />
                <p className="text-sm text-black font-medium">
                  {location.contact}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="opacity-40"
                  width={16}
                  src="/clock.svg"
                  alt="phone"
                />
                <p className="text-sm text-black font-medium">
                  {location.openHours}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
