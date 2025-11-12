import logo from '../assets/images/logo.svg'

const HeroSection = () => {
  return (
    <div className='flex w-[1100px] mx-auto justify-between py-8'>
        <div className='flex gap-8 items-center'>
             <img src={logo} alt="" />
             <ul className='flex gap-4 text-base font-semibold text-Gray-500'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
             </ul>
        </div>

        <div className='space-x-8'>
            <button className='text-Gray-500 font-semibold'>Login</button>
            <button className='px-6 py-2 bg-Blue text-white rounded-full'>SignUp</button>
        </div>
       
    </div>
  )
}

export default HeroSection