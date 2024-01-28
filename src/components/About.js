import "../css/about.css";

export function About() {
  return (
    <>
      <div className="h-obj flex text-center justify-center items-center flex-col textAb ff-Libre-Bold">
        <span>creative and ambitious</span>
        <span>just starting out</span>
        <span className="ff-OldStandart-Regular">in web development</span>
      </div>
      <div className="h-obj flex  justify-end items-center">
        <div className="w-1/2 ff-SequalSans-Medium text-2xl">
          <p className="mb-4 blue text-us">What i do</p>
          <span className="">
            I develop user interfaces for web applications. Using technologies
            such as HTML, CSS and JavaScript to create interactive and responsive
            web pages. I strive to improve my skills, learn new frameworks and
            approaches to web development. Willingness to learn and improve your
            skills.
          </span>
        </div>
      </div>
    </>
  );
}
