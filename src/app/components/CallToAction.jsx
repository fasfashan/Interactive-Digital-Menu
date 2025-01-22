export default function CallToAction() {
  return (
    <>
      <div id="cta" className=" bg-neutral-200 pt-14 mt-20">
        <div className="container max-w-5xl m-auto grid grid-cols-12 items-center  justify-between">
          <div className="flex flex-col col-span-7 gap-8">
            <h1 className="text-5xl font-extrabold max-w-lg ">
              Butuh copy di sebelah sini tapi lebih panjang ya!
            </h1>
            <div className="flex   gap-4">
              <img height={32} width={120} src="/appstore.png" alt="" />
              <img height={32} width={120} src="/googleplay.png" alt="" />
            </div>
          </div>
          <img className="w-fit col-span-5" src="/cta-image.png" alt="" />
        </div>
      </div>
    </>
  );
}
