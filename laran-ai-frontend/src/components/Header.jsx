import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <h1 className="text-2xl font-bold text-primary">Laran AI Media</h1>
    <DarkModeToggle />
  </header>
);

export default Header;
