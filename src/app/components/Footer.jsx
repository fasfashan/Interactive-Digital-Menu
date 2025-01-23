import Image from "next/image";
import CallToAction from "./CallToAction";
export default function Footer() {
  return (
    <div className="">
      <footer className="bg-red-950 ">
        <div className="max-w-5xl m-auto px-3 flex justify-between">
          <Image
            src="/logo-white.svg"
            width={1000}
            className="w-24"
            height={32}
            alt="Logo white"
          />
          <div className="flex gap-2 items-center pt-10 py-8">
            <Image
              src="/envelope.svg"
              width={1000}
              className="w-4"
              height={32}
              alt="Logo white"
            />
            <p className="text-white">admin@murniresto.co.id</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
