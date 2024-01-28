import imgWeather from "../images/Weather/img2.png";
import imgConverter from "../images/Converter/img2.png";
import imgSpotify from "../images/Spotify/img2.png";
import { useState } from "react";
import { Link } from "react-router-dom";


export function MyWorks() {
  const [worksAnimatedText, setWorksAnimatedText] = useState(
    "Weather app - Stylish weather forecast"
  );
  const [worksAnimatedImg, setWorksAnimatedImg] = useState(imgWeather);
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = (newText, newImg, newHover) => {
    setWorksAnimatedText(newText);
    setWorksAnimatedImg(newImg);
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setWorksAnimatedText("Weather app - Stylish weather forecast");
    setIsHover(false);
  };


  return (
    <>
      <div className="flex flex-row items-start">
        <div className="numeric font-bold text-4xl">
          <span>01</span>
        </div>
        <div className="ml-2 font-bold text-6xl flex flex-col ff-SequalSans-Medium">
          <span>MY</span>
          <span>WORKS</span>
        </div>
      </div>

      <div className="px-24 py-12 flex justify-between items-center">
        <ul className="ml-2 font-bold text-6xl bg-clip-text text-transparent">
          <Link to="/projects/Weather">
            <li
              className="work-hover work-hover-weather text-t text-us my-2"
              id="weather"
              onMouseOver={() =>
                handleMouseOver(
                  "Weather app - Stylish weather forecast",
                  imgWeather
                )
              }
              onMouseOut={handleMouseOut}
            >
              Weather
            </li>
          </Link>
          <Link to="/projects/Converter">
            <li
              className="work-hover work-hover-exchanger text-us my-2"
              id="exchanger"
              onMouseOver={() =>
                handleMouseOver(
                  "Currency converter - Streamlined currency exchange",
                  imgConverter
                )
              }
              onMouseOut={handleMouseOut}
            >
              Converter
            </li>
          </Link>
          <Link to="/projects/Spotify">
            <li
              className="work-hover work-hover-spotify text-us my-2"
              id="spotify"
              onMouseOver={() =>
                handleMouseOver(
                  "Spotify - Premium music streaming experience",
                  imgSpotify
                )
              }
              onMouseOut={handleMouseOut}
            >
              Spotify
            </li>
          </Link>
        </ul>
        <div className="relative w-5/12 h-full">
          <div className="w-11/12 relative">
            <img
              className={`obj-fit-cover`}
              src={worksAnimatedImg}
              alt="project view"
              style={{ width: "400px", height: "500px" }}
            ></img>
            <div className={`absolute top-0 left-0 right-0 bottom-0 pulse ${isHover ? 'hov' : ''}`}></div>

            <div className="absolute bottom-10 right-0 project-description py-2 font-semibold ">
              <span
                className="animated-text align-middle hover-weather"
                id="worksAnimatedText"
              >
                {worksAnimatedText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
