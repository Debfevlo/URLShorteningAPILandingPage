import logo from '../assets/images/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return ( 
    <div className='flex justify-between items-center px-6 py-8 md:px-20 md:py-8'>
        <div className='flex gap-8 items-center'>
             <img src={logo} alt="" className='hover:cursor-pointer' />
             <ul className='hidden md:flex gap-4 text-base font-semibold text-Gray-500'>
                <li className='hover:cursor-pointer hover:text-Purple'>Features</li>
                <li className='hover:cursor-pointer hover:text-Purple'>Pricing</li>
                <li className='hover:cursor-pointer hover:text-Purple'>Resources</li>
             </ul>
        </div>

        <button className='block md:hidden'>
              <RxHamburgerMenu className='' size={32}/>
             </button>

        <div className='space-x-8 hidden md:block'>
            <button className='text-Gray-500 font-semibold hover:px-6 hover:py-2 hover:rounded-full hover:border-2 hover:border-Blue hover:text-Blue hover:cursor-pointer'>Login</button>
            <button className='px-6 py-2 bg-Blue text-white rounded-full hover:bg-Purple hover:scale-105 hover:cursor-pointer'>SignUp</button>
        </div>
       
    </div>
  )
}

export default NavBar