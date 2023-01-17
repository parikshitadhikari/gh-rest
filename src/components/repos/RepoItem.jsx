import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div>
      <div className="bg-base-300 mb-2 rounded-xl p-4">
        <h3>
          <a href={html_url} className=" text-white ">
            <FaLink className=" inline mr-2" />
            {name}
          </a>
        </h3>
        <p className="text-xs my-1">{description}</p>
        <div className="space-x-4">
          <div className="mr-2 badge badge-info">
            <FaEye />
            {watchers_count}
          </div>
          <div className="mr-2 badge badge-success">
            <FaStar />
            {stargazers_count}
          </div>
          <div className="mr-2 badge badge-lg">
            <FaInfo />
            {open_issues}
          </div>
          <div className="mr-2 badge badge-warning">
            <FaUtensils />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
