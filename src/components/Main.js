import "../css/main.css";
import { MyWorks } from "./Works";
import { MyApproach } from "./Approach";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <>
      <div className="h-obj flex flex-col justify-center">
        <div className="flex flex-col text-center textM">
          <span className="ff-SequalSans-Medium">RETHINK</span>
          <span className="ff-OldStandart-Regular">TOMORROW</span>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/about"
            className="rotate-button flex justify-center relative"
          >
            <span className="rotate-button-face-front">LEARN MORE</span>
            <span className="rotate-button-face-back">LEARN MORE</span>
          </Link>
        </div>
      </div>
      <div className="h-obj">
        <MyWorks />
      </div>
      <div className="h-obj">
        <MyApproach />
      </div>
    </>
  );
}
