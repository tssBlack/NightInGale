import "../css/header.css";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="flex justify-between w-full items-center">
        <ul className="flex">
          <li className="text-hover">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="ml-10 text-hover">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="w-full flex justify-center absolute items-center">
          <Link to="/" className="fixed text-xl ff-Libre-Italic">
            NIGHTINGALE
          </Link>
        </div>
        <ul className="flex">
          <li>
            <a
              href="https://github.com/tssBlack"
              className="text-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gh
            </a>
          </li>
          <li className="ml-10">
            <a
              href="https://t.me/tssBlvck"
              className="text-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tg
            </a>
          </li>
          <li className="ml-10">
            <a
              href="https://www.linkedin.com/in/takich/"
              className="text-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Li
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
