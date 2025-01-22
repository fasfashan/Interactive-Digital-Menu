import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="bg-red-950 mt-20">
        <div className="max-w-5xl m-auto flex justify-between">
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
    </>
  );
}
