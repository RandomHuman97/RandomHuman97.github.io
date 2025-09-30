import React from 'react';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

function Hero() {
  return (
    <section className="bg-dark text-darkest py-20 flex items-center justify-center max-w-5xl mx-auto mt-5 rounded-3xl"> 
      <div className="text-center max-w-5xl mx-auto "> 
        <h1 className="text-7xl font-bold mb-4 ">nicholas karneyenka</h1>
        <p className="text-lg mb-12 sm:px-0 px-20 ">
          a developer with a passion for low level, backend, and frontend development. 
        </p>
          <HashLink to="/#projects" smooth className="hover:bg-darker hover:text-white shadow-xl bg-light text-darker px-6 py-3 rounded-full  transition ">
            View Portfolio
          </HashLink>
      </div>
    </section>
  );
}

export default Hero;