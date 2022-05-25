import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { searchContext } from "../Search/SearchContextProvider";

const Input = () => {
  const [keyword, setKeyword] = useState();
  const {handelSearch} = useContext(searchContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative mt-1 rounded-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineSearch />
        </div>
        <input
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handelSearch(keyword);
              navigate("/search");
              
            }
          }}
          type="text"
          id="email-adress-icon"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Input;
