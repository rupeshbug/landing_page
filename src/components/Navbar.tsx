import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className='flex items-center justify-between w-100 py-2 px-5 text-white lg:px-20'>
        <div className='flex items-center justify-between w-1/5'>
          <div>
            <img src={logo} alt='Logo' style={{ height: '70px', width: '80px', borderRadius: '50%' }} />
          </div>
          <ul className='hidden md:flex justify-between w-2/5 space-x-4 text-lg cursor-pointer'>
            <li className="hover:text-slate-300">Features</li>
            <li className="hover:text-slate-300">Pricing</li>
            <li className="hover:text-slate-300">Company</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-end space-x-10 w-2/6 text-lg cursor-pointer">
          <button className='font-bold hover:text-slate-300 border border-transparent'>Sign in</button>
          <button className='bg-buttonColor text-white px-4 py-2 rounded hover:bg-buttonHoverColor'>Start free trial</button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleNav}>
          <FaBars className="text-2xl" />
        </div>
      </div>
      {/* navigation for small screen */}
      {isNavOpen && (
        <div className="mt-1 mx-2 fixed inset-0 bottom-1/2 bg-gray-900 flex flex-col py-5 px-5 rounded-lg md:px-10 md:hidden">
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" height={70} width={70} style={{ borderRadius: "50%" }} />
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleNav} />
          </div>
          <ul className="text-lg mt-4 flex flex-col">
            <li className="hover:text-slate-300 mb-2">Features</li>
            <li className="hover:text-slate-300  mb-2">Pricing</li>
            <li className="hover:text-slate-300">Company</li>
          </ul>
          <div className="mt-3 flex flex-col w-full text-lg">
            <button className='mb-4 font-bold hover:text-slate-300 border border-transparent'>Sign in</button>
            <button className='bg-buttonColor text-white px-4 py-2 rounded hover:bg-buttonHoverColor'>Start free trial</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

