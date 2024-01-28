import { useParams } from "react-router-dom";
import { project } from "../projects/projectInfo";
import { Carousel } from "react-responsive-3d-carousel";
import "../css/project.css";

export function Project() {
  const { projects } = useParams();
  const aboutProject = project[projects];

  const projectImage1 = require(`../images/${projects}/img1.png`);
  const projectImage2 = require(`../images/${projects}/img2.png`);
  const projectImage3 = require(`../images/${projects}/img3.png`);

  return (
    <div className="h-obj flex flex-col justify-center">
      {aboutProject ? (
        <>
          <div className="relative flex items-center">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows={true}
              autoPlay={true}
              pauseOnHover={true}
              interval={5000}
              transitionTime={750}
              indicatorsInactiveColor={"unset"}
              indicatorsActiveColor={"#f1bda5"}
              isShadow={false}
              width={"500px"}
              height={"300px"}
              depth={3}
              showIndicators={false}
            >
              <div className="relative">
                <img
                  className="h-full w-full obj-fit-cover"
                  src={projectImage1}
                  alt=""
                />
              </div>
              <div className="relative">
                <img
                  className="h-full w-full obj-fit-cover"
                  src={projectImage2}
                  alt=""
                />
              </div>
              <div className="relative">
                <img
                  className="h-full w-full obj-fit-cover"
                  src={projectImage3}
                  alt=""
                />
              </div>
            </Carousel>
            <div
              className="absolute right-0 project-description py-2 font-semibold"
              style={{ width: "25%" }}
            >
              <span className="animated-text align-middle hover-weather">
                {aboutProject.description}
              </span>
            </div>
          </div>
          <div className="mt-10 text-lg font-medium">
            <p>{aboutProject.about}</p>

            <div className="flex justify-center mt-8">
              <a
                href={aboutProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rotate-button flex justify-center relative"
              >
                <span className="rotate-button-face-front text-us">
                  Learn more on GitHub
                </span>
                <span className="rotate-button-face-back text-us">
                  Learn more on GitHub
                </span>
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className="h-obj flex items-center justify-center">
          Project not found
        </div>
      )}
    </div>
  );
}
