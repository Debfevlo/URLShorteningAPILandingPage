

const Banner = () => {
  return (
    <div className="bg-[url(/bg-boost-mobile.svg)] md:bg-[url(/bg-boost-desktop.svg)] bg-Gray-900  text-center p-16 md:p-8 space-y-10 ">
        <p className="text-white font-bold text- md:text-3xl">Boost your Link today !</p>
         <div className='text-center text-2xl md:text-base'>
                <button className='md:px-12 md:py-4 px-8 py-4  bg-Blue text-white rounded-full  hover:scale-105 hover:cursor-pointer'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner