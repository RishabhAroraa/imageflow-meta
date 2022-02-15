import BannerPhoto2 from "../../../../static/BannerPhoto2.png";

export default function Community() {
  return (
    <div className="flex justify-between bg-[#FFBD59] pl-20">
      <div className="text-white mt-24 text-left">
        <div className="text-6xl font-bold">
          Experience a community <br />
          like never before.
        </div>
        <div className="text-2xl font-medium mt-10">
          Imageflow META brings the photgraphy <br />and design community together
        </div>
        <div className="text-2xl font-medium mt-1">
          Engage with a like-minded community <br />
          to showcase and learn
        </div>
        <div className="text-2xl font-medium mt-1">
          Create your network, be your own boss
        </div>
        <button className="mt-8 py-5 px-8 text-lg font-semibold border-2 border-white bg-white text-black rounded-md hover:bg-transparent hover:text-white transition-all">
          Get started today
        </button>
      </div>
      <div>
        <img src={BannerPhoto2} alt="man using a camera on the mountains" />
      </div>
    </div>
  );
}
