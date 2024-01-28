import "../css/contact.css";

export function Contact() {
  return (
    <div className="h-obj flex items-center justify-around">
      <div className="flex">
        <div className="flex flex-col text-us textM">
          <span className="ff-SequalSans-Medium">Get in</span>
          <span className="ff-OldStandart-Regular">Contact</span>
        </div>
      </div>
      <div className="flex flex-col ff-SequalSans-Medium text-xl">
        <div className="flex flex-col my-2">
          <span className="text-us text-404040">
            LinkedIn<i className="ml-2 fa-brands fa-linkedin"></i>
          </span>
          <a
            href="https://www.linkedin.com/in/takich/"
            target="_blank"
            rel="noopener noreferrer"
            className="ff-Steradian-Medium text-contacts"
          >
            linkedin.com/in/takich
          </a>
        </div>
        <div className="flex flex-col my-2">
          <span className="text-us text-404040">
            Github<i className="ml-2 fa-brands fa-github"></i>
          </span>
          <a
            href="https://github.com/tssBlack"
            target="_blank"
            rel="noopener noreferrer"
            className="ff-Steradian-Medium text-contacts"
          >
            github.com/tssBlack
          </a>
        </div>
        <div className="flex flex-col my-2">
          <span className="text-us text-404040">
            Telegram<i className="ml-2 fa-brands fa-telegram"></i>
          </span>
          <a
            href="https://t.me/tssBlvck"
            target="_blank"
            rel="noopener noreferrer"
            className="ff-Steradian-Medium text-contacts"
          >
            t.me/tssBlvck
          </a>
        </div>
      </div>
    </div>
  );
}
