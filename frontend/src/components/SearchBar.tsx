
const SearchBar = () => {
  return (
    <div
      className="w-3/4 mx-auto h-40 md:h-30 bg-no-repeat bg-center bg-cover flex items-center p-4 rounded bg-Gray-900 bg-[url(/bg-shorten-desktop.svg)] justify-center gap-4 flex-col md:flex-row relative top-28 z-50"
    >
    <div className="bg-white md:w-2/3 p-2 md:p-3 rounded-xl w-full">
        <input 
        type="text" 
        className="p-2 rounded text-black placeholder-gray-500 w-full border-none focus:outline-none" 
        placeholder="Shorten a link here ..." 
      />
    </div>
    <button className="px-4 md:px-8 py-4 bg-Blue text-white rounded-xl font-bold w-[250px] md:w-[150px] ">Shorten It !</button>
    </div>
  )
}

export default SearchBar
