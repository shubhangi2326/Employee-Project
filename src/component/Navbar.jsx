// import React from 'react'

// const Navbar = () => {
//   return (
//       <div className=' flex bg-slate-800 h-16 items-center px-16'>
//       <h1 className='text-3xl font-bold text-green-500'>👨‍💻 EM Service </h1>
  
//       <div className='space-x-4 ms-auto '>
//       <a className='hover:text-blue-400' href="/">Home</a>
//       <a className='hover:text-blue-400' href="/">Profile</a>
//       <a className='hover:text-blue-400' href="/">Logout</a>
  
//       </div>
//       </div>
     
//   )
// }

// export default Navbar


import React from 'react';

const Navbar = () => {
  return (
    <div className="flex bg-slate-800 h-16 items-center px-4 sm:px-8 md:px-16">
      <h1 className="text-3xl font-bold text-green-500">👨‍💻 EM Service</h1>

      {/* Navbar Links */}
      <div className="ml-auto space-x-4 hidden sm:flex">
        <a className="hover:text-blue-400" href="/">Home</a>
        <a className="hover:text-blue-400" href="/">Profile</a>
        <a className="hover:text-blue-400" href="/">Logout</a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden ml-auto">
        <button className="text-white text-2xl">
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
