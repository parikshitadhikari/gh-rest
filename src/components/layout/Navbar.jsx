import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <>
      <div className="bg-slate-800 shadow-xl shadow-slate-900">
        <div className="flex justify-around p-4">
          <div className="flex items-center space-x-1">
            <AiFillGithub size={20} />
            <Link to="/" className="font-bold text-sm">
              {title}
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="font-bold font-serif text-sm hover:bg-slate-500 hover:rounded-lg p-2 duration-200"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-bold font-serif text-sm hover:bg-slate-500 hover:rounded-lg p-2 duration-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
Navbar.defaultProps = {
  title: "GH - REST",
};
Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
