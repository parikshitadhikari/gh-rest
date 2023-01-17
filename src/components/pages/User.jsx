import React from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);
  //destructuring all of the following from user object
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <div>
        <div className="mb-4">
          <Link
            to="/"
            className="ml-4 md:ml-10 bg-yellow-200 text-black p-2 rounded-lg hover:bg-yellow-400"
          >
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 max-w-4xl">
          <div className=" ">
            <div className="relative">
              <img
                className=" rounded-xl ml-4 md:ml-10 brightness-50 h-44 w-40"
                src={avatar_url}
                alt="/"
              />
              <div className="absolute bottom-4 left-8 md:bottom-6 md:left-16 font-serif font-bold text-white text-sm">
                <h2>{name}</h2>
                <p>{login}</p>
              </div>
            </div>
            
          </div>
          <div className="col-span-2 ml-4 text-white">
            <div className="mb-6">
              <h1 className="text-xl md:text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 badge badge-info">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-2">
                <a className="bg-transparent p-2 rounded-lg border border-white hover:bg-slate-500" href={html_url} target='_blank' rel="noreferrer">Visit Github Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
