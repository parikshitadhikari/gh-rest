import React from "react";
import PropTypes from "prop-types";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg bg-base-200 mb-6">
      <div className="p-4">
        <h2 className="font-bold text-white">Top Repositories:</h2>
        {repos.map((repo) => {
          <h1>{repo.name}</h1>;
        })}
      </div>
    </div>
  );
}
RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default RepoList;
