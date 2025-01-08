import React from 'react';

function Hero() {
  return (
    <section className="bg-dark text-darkest py-32 flex items-center justify-center max-w-5xl mx-auto mt-5 rounded-3xl"> 
      <div className="text-center max-w-5xl mx-auto"> 
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Nick</h1>
        <p className="text-lg mb-8">
          I'm a developer with a passion for low level, backend, and frontend development. 
        </p>
        <a href="#projects">
          <button className="boing bg-light text-darker px-6 py-3 rounded-full hover:bg-darker transition-colors duration-300">
            View Portfolio
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;