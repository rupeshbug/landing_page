import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between w-100 py-1 px-5 md:px-10 text-white'>
        <div className='flex items-center justify-between w-1/5'>
          <div>
            <img src={logo} alt='Logo' style={{height: '75px', width: '80px', borderRadius: '50%'}} />
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
        <div className="md:hidden cursor-pointer">
          <FaBars className="text-2xl" />
        </div>
      </div>
      {/* navigation for small screen */}
      <div className="p-3">
        <div className="bg-gray-900 flex flex-col py-7 px-5 rounded-lg md:px-10 md:hidden">
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" height={70} width={70} style={{borderRadius: "50%"}} />
            <FaTimes className="text-2xl" />
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
      </div>
    </>
  );
};

export default Navbar;
