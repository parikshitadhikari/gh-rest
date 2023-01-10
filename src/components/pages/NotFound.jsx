import React from "react";
import { Link } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
function NotFound() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h1 className="text-6xl font-bold">Ooop!</h1>
      <h3 className="text-4xl ">404- Page Not Found</h3>
      <Link
        to="/"
        className="bg-blue-500 rounded-lg p-4 text-white hover:bg-blue-800"
      >
        <ImHome3 className="inline mr-2" />
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
