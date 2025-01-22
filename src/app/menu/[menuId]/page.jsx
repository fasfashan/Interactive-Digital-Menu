"use client";
import { useData } from "@/app/context/DataProviders";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function MenuDetail() {
  const { csvData } = useData();
  const params = useParams();
  const menuId = decodeURIComponent(params.menuId);
  const slug = params.menuId;
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  };

  // Cari item berdasarkan Menu Name
  const menuItem = csvData.find(
    (item) => createSlug(item["Menu Name"]) === slug
  );

  if (!menuItem) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold text-red-500">
            Menu tidak ditemukan
          </h1>
          <Link
            href="/"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Kembali ke Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <div className="mb-10">
        <Link
          href="/"
          className="text-primary font-semibold hover:underline flex items-center gap-2"
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
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="col-span-5">
          <img
            src={`/${menuItem["Menu Name"]}.png`}
            alt={menuItem["Menu Name"]}
            className="w-full rounded-lg "
            onError={(e) => {
              e.target.src = "/placeholder.png";
            }}
          />
        </div>

        <div className="col-span-7 flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex  flex-col gap-2">
              <h1 className="text-2xl tracking-tighter   ">
                {menuItem["Menu Name"]}
              </h1>
              <h2 className="text-4xl tracking-tighter font-bold ">
                {menuItem.Price}
              </h2>
            </div>
            <hr />
            <p className="text-gray-600 text-lg">
              {menuItem.Description || "Deskripsi menu belum tersedia"}
            </p>
          </div>
          <div class="max-w-4xl mx-auto p-6  bg-white border border-primary rounded-lg ">
            <h1 class="text-xl font-bold mb-4 ">Kandungan Nutrisi</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-red-50 p-4 rounded-lg text-center">
                <p class="text-4xl font-bold">
                  {menuItem["Calories (kcal)"]}
                  <span class="text-sm font-normal"> kcal</span>
                </p>
                <p class="mt-2 text-sm">Calories</p>
              </div>
              <div class="bg-red-50 p-4 rounded-lg text-center">
                <p class="text-4xl font-bold">
                  {menuItem["Sugar (g)"]}{" "}
                  <span class="text-lg font-normal">g</span>
                </p>
                <p class="mt-2 text-sm">Sugar</p>
              </div>
              <div class="bg-red-50 p-4 rounded-lg text-center">
                <p class="text-4xl font-bold">
                  {menuItem["Fat (g)"]}{" "}
                  <span class="text-lg font-normal">g</span>
                </p>
                <p class="mt-2 text-sm">Far</p>
              </div>
              <div class="bg-red-50 p-4 rounded-lg text-center">
                <p class="text-4xl font-bold">
                  {menuItem["Sodium (mg)"]}{" "}
                  <span class="text-lg font-normal">mg</span>
                </p>
                <p class="mt-2 text-sm">Sodium</p>
              </div>
            </div>
            <p class="mt-6 text-sm text-gray-600">
              Informasi nutrisi ini berasal dari pengujian yang dilakukan di
              laboratorium terakreditasi, sumber yang diterbitkan, dan/atau
              informasi yang diberikan oleh pemasok Murni Resto.
            </p>
          </div>
          {/* <Link
            className="px-6 font-semibold bg-primary text-white border border-neutral-300 shadow-inner py-3 w-full text-center    rounded mt-4"
            href="#cta"
          >
            Pesan
          </Link> */}
        </div>
      </div>
    </div>
  );
}
