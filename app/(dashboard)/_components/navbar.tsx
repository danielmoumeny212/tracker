// Navbar.js
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Navbar = () => (
  <header className="flex items-center justify-between bg-white dark:bg-gray-800 px-8 py-3 border-b dark:border-gray-700">
    <h1 className="text-1xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h1>
    <div className="flex items-center space-x-4">
      <UserButton />
    </div>
  </header>
);

export default Navbar;
