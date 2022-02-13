import FeatureCard from "./FeatureCard";

import capture from "../../../../static/capture.png";
import edit from "../../../../static/edit.png";
import share from "../../../../static/share.png";
import build from "../../../../static/build.png";

export default function Features() {
  return (
    <div className="w-full">
      <div className="m-auto mt-16 text-4xl font-bold">With ImageFlow Meta, you can:</div>
      <div className="flex p-8 w-[75%] m-auto justify-around items-center">
        <FeatureCard header="Capture" content="the best moments" image={capture}/>
        <FeatureCard header="Edit" content="to match your aesthetic" image={edit}/>
        <FeatureCard header="Share" content="with like-minded people" image={share}/>
        <FeatureCard header="Build" content="a portfolio" image={build}/>
      </div>
    </div>
  );
}
