import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="p-4 navbar sticky bg-white shadow-sm border-b border-neutral-200 z-10  top-0">
        <div className="max-w-5xl  m-auto flex justify-between items-center ">
          <Link href="/">
            <Image
              src="/logo-color.svg"
              width={1000}
              className="w-24"
              height={32}
              alt="Logo Color"
            />
          </Link>
          <ul className="flex items-center gap-10 font-medium ">
            <Link className="hover:opacity-60 transition-all" href="/">
              <li>Menu</li>
            </Link>
            <Link className="hover:opacity-60 transition-all" href="/promo">
              <li>Promo</li>
            </Link>
            <Link className="hover:opacity-60 transition-all" href="/store">
              <li>Store</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
