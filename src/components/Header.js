import React from "react";
import { PencilIcon } from "@heroicons/react/outline";
import Search from "./Search";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>My Todos</h1>
        <PencilIcon className="h-5 w-5 icon icon-pencil" />
      </div>
      <Search />
    </div>
  );
};

export default Header;
