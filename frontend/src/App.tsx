import Banner from "./components/Banner"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import StatisticsDashboard from "./components/StatisticsDashboard"

const App = () => {
  return (
    <div>
    <NavBar/>
    <HeroSection/>
    <SearchBar/>
    <StatisticsDashboard/>
    <Banner/>
   </div>
    
   
    
  )
}

export default App