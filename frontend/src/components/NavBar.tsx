import logo from '../assets/images/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return ( 
    <div className='flex justify-between items-center px-6 py-8 md:px-20 md:py-8'>
        <div className='flex gap-8 items-center'>
             <img src={logo} alt="" />
             <ul className='hidden md:flex gap-4 text-base font-semibold text-Gray-500'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
             </ul>
        </div>

        <button className='block md:hidden'>
              <RxHamburgerMenu className='' size={32}/>
             </button>

        <div className='space-x-8 hidden md:block'>
            <button className='text-Gray-500 font-semibold'>Login</button>
            <button className='px-6 py-2 bg-Blue text-white rounded-full'>SignUp</button>
        </div>
       
    </div>
  )
}

export default NavBar