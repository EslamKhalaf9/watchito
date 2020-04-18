import React from 'react';
import { Link } from '@reach/router';

function Header() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center shadow-md py-3 fixed min-w-full bg-white top-0 md:px-5">
      <a href="/" className="text-3xl mb-2 hidden md:block">
        Watchito
      </a>
      <ul className="grid grid-cols-3 gap-4 md:ml-auto">
        <li>
          <Link to="watched">Watched</Link>
        </li>
        <li>
          <Link to="towatch">To Watch</Link>
        </li>
        <li>
          <Link to="search">Search</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
