export default function Banner() {
  return (
    <div className="bg-[url('static/BannerPhoto.jpg')] w-full h-[60vh]">
      <div className="text-left pt-16 pl-16 text-white">
        <div className="font-bold text-8xl">ImageFlow,</div>
        <div className="font-bold text-8xl">now meta</div>
        <div className="font-medium text-4xl mt-4">
          Enjoy the same community <br />
          and collaboration experience, <br />
          now with a <span className="font-bold">social meta.</span>
        </div>
        <div className="pt-6">
          <button className="py-5 px-8 text-lg font-semibold border-2 border-white bg-white text-black rounded-md hover:bg-transparent hover:text-white transition-all">Join now</button>
        </div>
      </div>
    </div>
  );
}
