import promos from "../data/promo";
import Slider from "../components/Slider";
import Link from "next/link";
export default function PromoPage() {
  return (
    <div className="max-w-5xl px-3 m-auto mt-10">
      <Link
        href="/"
        className="text-primary ml-3 font-semibold hover:underline flex items-center gap-2 mb-10"
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
        Back to menu
      </Link>
      <Slider />

      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden"
            >
              <img
                src={promo.banner}
                alt={promo.title}
                className="w-full h-fit object-cover"
              />
              <div className="p-4 space-y-4">
                <h2 className="text-xl font-semibold mb-2">{promo.title}</h2>
                <div className="flex gap-2 items-center">
                  <span className="font-normal text-gray-600">
                    Berlaku sampai:
                  </span>
                  <p className="font-medium  text-sm">{promo.period}</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  {promo.details.map((detail, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
