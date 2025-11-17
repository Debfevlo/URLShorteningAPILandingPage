import Logo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instgram from '../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className="bg-Gray-950 px-6 md:px-20 flex flex-col md:flex-row gap-20 py-16 md:items-start items-center ">
        <img src={Logo} alt="Logo" className='bg-white md:mr-40' />
            <div className='flex gap-32 flex-col md:flex-row  '>
                <div className='space-y-4'>
                    <p className='text-xl font-bold text-Gray-400'>Features</p>
                    <div className='text-Gray-500 space-y-4'>
                        <p>Link Shortening</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>
                </div>
            
            </div>
            <div className='flex gap-32 flex-col md:flex-row '>
                <div className='space-y-4'>
                    <p className='text-xl font-bold text-Gray-400'>Resources</p>
                    <div className='text-Gray-500 space-y-4'>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                </div>
            
            </div>
            <div className='flex gap-32 flex-col md:flex-row '>
                <div className='space-y-4'>
                    <p className='text-xl font-bold text-Gray-400'>Company</p>
                    <div className='text-Gray-500 space-y-4'>
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
            
            </div>
            <div className='flex  gap-6 ml-8'>
                <img src={facebook} alt="facebook logo" />
                <img src={twitter} alt="twitter logo" />
                <img src={pinterest} alt="pinterest logo" />
                <img src={instgram} alt="pinterest logo" />
            </div>

    
    </div>
  )
}

export default Footer