"use client";

import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link } from 'react-router-dom';

function CustomNavbarLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    >
      {children}
    </Link>
  );
}

export function CompoNav() {
  return (
    <Flowbite>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <CustomNavbarLink to="/">
            Home
          </CustomNavbarLink>
          <CustomNavbarLink to="/kabkota">
            Kabkota
          </CustomNavbarLink>
          <CustomNavbarLink to="/edit">
            GeojsonList
          </CustomNavbarLink>
          <CustomNavbarLink to="/edite">
            EditGeojson
          </CustomNavbarLink>
          <DarkThemeToggle />
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}
