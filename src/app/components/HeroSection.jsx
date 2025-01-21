export default function HeroSection() {
  return (
    <>
      <div className="  items-start justify-start space-y-2 bg-[url('/hero-bg.jpg')] h-[400px] bg-cover bg-center bg-no-repeat">
        <div className=" space-y-6  max-w-5xl m-auto">
          <h1 className="font-bold tracking-tight text-7xl max-w-2xl leading-tight pt-20 text-white">
            Butuh copy di sebelah sini!
          </h1>
          <button
            type="button"
            className="px-6 font-semibold bg-white border border-neutral-300 shadow-inner py-2 w-fit rounded mt-4"
          >
            Lihat menu
          </button>
        </div>
      </div>
    </>
  );
}
