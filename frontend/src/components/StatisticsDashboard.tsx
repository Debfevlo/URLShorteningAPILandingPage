
import brandGraph from '../assets/images/icon-brand-recognition.svg'
import detailRecord from '../assets/images/icon-detailed-records.svg'
import fullCustomize from '../assets/images/icon-fully-customizable.svg'


const dashboardList =[
    {
        id:1,
        icon:brandGraph,
        title: 'Brand Recognition',
        text: "Boost your brand with  each click. Generic link don't mean a thing. Branded link help instil confidence in your content"

    },
    {
        id:1,
        icon:detailRecord,
        title: 'Detailed Records',
        text: "Gain insight into who is clickling your link. knowing when and where people engage with your content helps inform better decision"

    },
    {
        id:1,
        icon:fullCustomize,
         title: 'Fully Customizable',
        text: "Boost your brand with each click. Generic link don't mean a thing. Branded link help instil confidence in your content"

    },
]

const StatisticsDashboard = () => {
  return (
    <div className="bg-gray-300 px-6  md:px-20 md:mt-12 mt-6 py-32  text-center">
        <p className="font-bold text-4xl text-Gray-950">Advance Statistics</p>
        <p className="text-md mt-5 text-gray-600">Track how your links are performing across the web with <br /> our advance statistics dashboard</p>
        <div className='flex flex-col md:flex-row gap-20 md:gap-10   py-16 mt-12 items-center justify-center'>
        {
            dashboardList.map((card)=>{
                return(
                        <div key={card.id} className='bg-white md:w-1/3 rounded-md py-10 relative shadow-md px-5  '>
                            <div className=' text-center absolute bottom-48  md:bottom-40 md:left-6 left-32 bg-Gray-950 w-16 h-16 rounded-full flex items-center justify-center'>
                                <img src={card.icon} alt="" className=''/>
                            </div>
                            <p className='font-semibold text-xl mb-3'>{card.title}</p>
                            <p className='text-Gray-500'>{card.text}</p>
                        </div>
            
                )
            })
        }
        </div>
    </div>
  )
}

export default StatisticsDashboard