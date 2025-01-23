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

  // Cari menu terkait berdasarkan kategori
  const relatedMenus = csvData
    .filter(
      (item) =>
        item.Category === menuItem?.Category &&
        createSlug(item["Menu Name"]) !== slug
    )
    .slice(0, 4); // Batasi hingga 4 item terkait

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
            Back to menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
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
          <div className="max-w-4xl mx-auto p-6  bg-white border border-primary rounded-lg ">
            <h1 className="text-xl font-bold mb-4 ">Nutritional Facts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="flex gap-1 items-start justify-center">
                  <p className="text-4xl font-bold">
                    {menuItem["Calories (kcal)"]}
                  </p>
                  <span className="text-sm font-normal text-neutral-500">
                    {" "}
                    kcal
                  </span>
                </div>
                <p className="mt-2 text-sm">Calories</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="flex gap-1 items-start justify-center">
                  <p className="text-4xl font-bold">{menuItem["Sugar (g)"]}</p>
                  <span className="text-sm font-normal text-neutral-500">
                    {" "}
                    g
                  </span>
                </div>

                <p className="mt-2 text-sm">Sugar</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="flex gap-1 items-start justify-center">
                  <p className="text-4xl font-bold">{menuItem["Fat (g)"]}</p>
                  <span className="text-sm font-normal text-neutral-500">
                    {" "}
                    g
                  </span>
                </div>
                <p className="mt-2 text-sm">Fat</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="flex gap-1 items-start justify-center">
                  <p className="text-4xl font-bold">
                    {menuItem["Sodium (mg)"]}
                  </p>
                  <span className="text-sm font-normal text-neutral-500">
                    {" "}
                    mg
                  </span>
                </div>

                <p className="mt-2 text-sm">Sodium</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Nutritional information is based on standard recipes and may vary.
              Actual values can be affected by preparation, portion size, and
              ingredient substitutions. For dietary needs or allergies, please
              consult our staff.
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
      {relatedMenus.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Other Related Food</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedMenus.map((item, index) => (
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
        </div>
      )}
    </div>
  );
}
