import heroImg from '../assets/images/illustration-working.svg'

const HeroSection = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row mt-10 items-center justify-between'>
        <div className='mt-10 md:mt-0 space-y-8'>
           <div className='space-y-4'>
             <h1 className='text-5xl md:text-6xl font-bold text-Gray-900 text-center md:text-left '>More than just <br /> shorter links</h1>
            <p className='text-Gray-500 text-xl md:text-lg text-center font-semibold md:text-left '>Build your brand's recognition and get detailed <br /> insight on how your links are performing </p>
           </div>
            <div className='text-center text-2xl md:text-base md:text-left'>
                <button className='px-12 py-4 md:px-8 md:py-4  bg-Blue text-white rounded-full'>Get Started</button>
            </div>
        </div>
        <div className=''>
            <img src={heroImg} alt="illustration of a person working" />
        </div>
    </div>
  )
}

export default HeroSection