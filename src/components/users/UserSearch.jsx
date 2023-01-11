import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      alert("Please enter something");
    } else {
        searchUsers(text)
      setText('');
    }
  };
  return (
    <div className="flex flex-col md:flex-row space-y-4 space-x-0 md:space-y-0 md:space-x-6 md:items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className="bg-white rounded-l-lg h-8 w-80 placeholder:text-gray-500 text-black px-2"
            type='text'
            placeholder="Search"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className=" rounded-r-lg w-16 bg-slate-900">Go</button>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="text-sm font-bold font-serif text-white bg-red-700 hover:bg-red-900 rounded-lg px-2 py-1">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
