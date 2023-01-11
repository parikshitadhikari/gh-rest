import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="rounded-xl shadow-md bg-gray-700">
      <div className="flex">
        <div className="p-4">
            <img className="rounded-full w-16 h-16" src={avatar_url} alt="" srcset="" />
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="font-bold text-white">{login}</h3>
            <Link to={`/users/${login}`} className="text-sm font-serif">Visit Profile</Link>
        </div>
      </div>
    </div>
  );
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
