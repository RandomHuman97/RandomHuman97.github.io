import React from 'react';

function Navbar() {
  return (
    <nav className="bg-light p-[25px] flex justify-between rounded-3xl mt-5 items-center max-w-5xl mx-auto shadow-xl"> 
      <h1 className="text-darker font-bold font-inter text-xl">nicholas k.</h1>
      <ul className="flex space-x-4 font-inter">
        <li>
          <a href="/" className="text-darker hover:text-darkest">Home</a>
        </li>
        <li>
          <a href="/#posts" className="text-darker hover:text-darkest">Posts</a>
        </li>
        <li>
          <a href="/#contact" className="text-darker hover:text-darkest">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;