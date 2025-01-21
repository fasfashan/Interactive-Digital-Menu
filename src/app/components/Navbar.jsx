import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="p-4 sticky bg-white  top-0">
        <div className="max-w-5xl  m-auto flex justify-between items-center ">
          <Image
            src="/logo-color.png"
            width={1000}
            className="w-24"
            height={32}
            alt="Logo Color"
          />
          <ul className="flex items-center gap-10 font-medium text-lg">
            <Link className="hover:opacity-60 transition-all" href="/">
              <li>Menu</li>
            </Link>
            <Link className="hover:opacity-60 transition-all" href="/">
              <li>Promo</li>
            </Link>
            <Link className="hover:opacity-60 transition-all" href="/">
              <li>Locations</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
