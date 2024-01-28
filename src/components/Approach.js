import image1 from "../images/anime.jpg";
import { Carousel } from "react-responsive-3d-carousel";
import { API } from "../js/gtihubAPI";
import { Link } from "react-router-dom";

import WeatherImg from "../images/Weather/img1.png";
import ConverterImg from "../images/Converter/img1.png";
import SpotifyImg from "../images/Spotify/img1.png";

export function MyApproach() {
  let a = API();

  return (
    <>
      <div className="flex flex-row items-start">
        <div className="numeric font-bold text-4xl">
          <span>02</span>
        </div>
        <div className="ml-2 font-bold text-6xl flex flex-col ff-SequalSans-Medium">
          <span>MY</span>
          <span>APPROACH</span>
        </div>
      </div>

      <div className="py-12 flex justify-between items-center">
        {Array.isArray(a) && a.length > 0 ? (
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
            autoPlay={false}
            pauseOnHover={true}
            interval={5000}
            transitionTime={750}
            indicatorsInactiveColor={"unset"}
            indicatorsActiveColor={"#f1bda5"}
            isShadow={false}
            width={"400px"}
            height={"500px"}
            depth={3}
            showIndicators={false}
          >
            {a.map(
              (item) =>
                (item.html_url === "https://github.com/tssBlack/Spotify-app" ||
                  item.html_url ===
                    "https://github.com/tssBlack/Converter-app" ||
                  item.html_url ===
                    "https://github.com/tssBlack/Weather-app") && (
                  <div
                    className="relative flex items-center justify-center"
                    key={item.id}
                  >
                    {item.name === "Spotify-app" ? (
                      <img
                        className="h-full w-full obj-fit-cover"
                        src={SpotifyImg}
                        alt="Spotify-App"
                        style={{ filter: "blur(5px  )" }}
                      />
                    ) : item.name === "Converter-app" ? (
                      <img
                        className="h-full w-full obj-fit-cover"
                        src={ConverterImg}
                        alt="Converter-App"
                        style={{ filter: "blur(5px)" }}
                      />
                    ) : item.name === "Weather-app" ? (
                      <img
                        className="h-full w-full obj-fit-cover"
                        src={WeatherImg}
                        alt="Weather-App"
                        style={{ filter: "blur(5px)" }}
                      />
                    ) : null}
                    <div className="absolute flex item-center justify-center">
                      <a
                        href={item.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative ff-Libre-Bold text-2xl text-black">
                          <span className="DO">DO</span> <span className="YOUR">YOUR</span> <span className="BEST">BEST</span>
                        </div>
                      </a>
                    </div>
                  </div>
                )
            )}
          </Carousel>
        ) : null}
        <div className="relative w-5/12 h-full">
          <div className="w-11/12">
            <p className="font-medium text-lg">
              Embracing philosophy in frontend development, I redefine the
              conventional approach by seamlessly integrating multiple creative
              disciplines. I believe that bringing your web presence to your
              audience demands a comprehensive vision, as it's the culmination
              of various elements. As a versatile frontend development
              professional, I am well-equipped to navigate through this holistic
              process, ensuring a cohesive and engaging user experience for your
              brand.
            </p>
            <div className="flex justify-center mt-8">
              <Link to="/about"
                className="rotate-button flex justify-center relative"
              >
                <span className="rotate-button-face-front">
                  LEARN MORE ABOUT ME
                </span>
                <span className="rotate-button-face-back">
                  LEARN MORE ABOUT ME
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
