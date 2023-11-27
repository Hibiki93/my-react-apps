import {useEffect, useState} from "react";
import MovieCard from "./components/movieCard";
import LoadingCard from "./components/loading";

import {Input} from "@nextui-org/react";
import {SearchIcon} from "./icon/searchIcon";

// c032e2d7
const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () =>{

  const searchMovies = async(title)=>{
    setMovies();
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setTimeout(() => {
      // Simulating API call with setTimeout
      setMovies(data.Search);
      setLoading(false);
    }, 1000); 
  }

  const [searchTerm,setSearchTerm] = useState("spider man");
  const [movies,setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEnter = (event)=>{
    console.log(event.key)
    if(event.key === 'Enter'){
      searchMovies(searchTerm);
    }
  };

  useEffect(()=>{
    searchMovies(searchTerm);
  },[searchTerm]);

  return (
    <>
        <div className="w-full flex flex-row items-center justify-center">
         <div className="mx-auto w-full max-w-[1024px] pb-3 px-6">
         <h1 className="mb-3 w-full mb-10 font-bold mt-12 text-large">Movies</h1>
          <div className="flex w-full flex-col">
            <div className="mb-3 w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
              <Input
                label="Search"
                isClearable
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                onKeyDown={handleEnter}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Type to search movie..."
                startContent={
                  <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {movies?.length > 0 && !loading ? (
                  movies.map((movie) => (
                    <MovieCard movie={movie} />
                    ))
            ) : (
                  loading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                      <LoadingCard key={index} />
                    ))
                  ) :(
                  <div className="empty flex flex-row min-h-80 items-center">
                    <h2 className="text-gray-500">No movies found</h2>
                  </div>
                )
            )}
          </div>
         </div>
        </div>
    </>
  )
}

export default App;