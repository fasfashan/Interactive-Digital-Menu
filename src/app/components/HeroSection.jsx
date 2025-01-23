import Link from "next/link";
export default function HeroSection() {
  return (
    <>
      <div className="  items-start flex justify-start space-y-2 bg-[url('/hero-bg.jpg')] h-[400px] bg-cover bg-center bg-no-repeat">
        <div className=" space-y-6 container max-w-5xl px-3 flex flex-col m-auto">
          <h1 className="font-bold tracking-tight text-7xl max-w-2xl leading-tight  text-white">
            The Tastiest Menu You'll Ever Scroll
          </h1>
          <Link
            className="px-6 font-semibold bg-white border border-neutral-300 shadow-inner py-2 w-fit rounded mt-4"
            href="#cta"
          >
            Download App
          </Link>
        </div>
      </div>
    </>
  );
}
