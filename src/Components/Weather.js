import React, { useEffect, useState } from 'react'
import "./Home.css";

const Weather = () => {

  const [query, setQuery] = useState("")
  const [ahmd, setahmd] = useState()
  const [mumbai, setmumbai] = useState()
  const [delhi, setdelhi] = useState()
  const [weather, setWeather] = useState()

  const fetchWeather = async (query) => {
    let weather = await fetch("http://api.weatherapi.com/v1/current.json?key=e6eaaf84404e4577afb63757232304&q=" + query)
    let response = await weather.json()
    console.log(response)
    return response
  }
  
  useEffect(() => {
    async function fetchData() {
      let ahmd = await fetchWeather("Ahmedabad")
      setahmd(ahmd)
      let mumbai = await fetchWeather("Mumbai")
      setmumbai(mumbai)
      let delhi = await fetchWeather("New Delhi")
      setdelhi(delhi)
    }
    fetchData();

  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
    
  }
  const handleClick = async (e) => {
    e.preventDefault()
    console.log(query)
    let w = await fetchWeather(query)
    setWeather(w)
  }

  return (
    <>
      <div>
        <section className="bg-white ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            {/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10 mb-8"> */}


            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-8 mb-5">
              <form className='p-2  mb-8"'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {/* <img src="../images/WeatherIcons.gif" className="w-5 h-5 text-gray-500 dark:text-gray-400" alt="" /> */}
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="text" name='search' value={query} onChange={handleChange} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  <button onClick={handleClick} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search Location</button>
                </div>

                <div>
                  {(weather && query.length>0)  && 
                    <div className='mb-2 text-2xl font-bold tracking-tight dark:text-white py-5'>
                      The Weather in  {query} ({weather && weather.location.country}) is {weather && weather.current.temp_c}&#8451;
                      and <br />windspeed is {weather.current.wind_kph} km/h ,<br />Humidity is {weather.current.humidity}
                    </div>
                  }
                </div>
              </form>
            </div>


            {/* </div> */}
            {/* <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-20">

              </div>

              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-20">


              </div>
            </div> */}
            <div className='flex justify-between '>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src='https://yometro.com/images/places/adalaj-step-well.jpg' className='rounded-t-lg' />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ahmedabad ({ahmd && ahmd.current.temp_c}&#8451;)</h5>
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ahmd && <div>The Weather in AHMD is {ahmd.current.temp_c}&#8451; and <br /> windspeed is {ahmd.current.wind_kph} km/h<br />Humidity is {ahmd.current.humidity}</div>}</div>
                </div>
              </div>

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src='https://cdn.wallpapersafari.com/73/86/UDH1rz.jpg' className='rounded-t-lg' />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mumbai ({mumbai && mumbai.current.temp_c}&#8451;)</h5>
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{mumbai && <div>The Weather in MUMBAI is {mumbai.current.temp_c}&#8451; and <br />windspeed is {mumbai.current.wind_kph} km/h<br />Humidity is {ahmd.current.humidity}</div>}</div>
                </div>
              </div>

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src='https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg' className='rounded-t-lg' />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delhi ({delhi && delhi.current.temp_c}&#8451;)</h5>
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{delhi && <div>The Weather in DELHI is {delhi.current.temp_c}&#8451; and <br />windspeed is {delhi.current.wind_kph} km/h<br />Humidity is {ahmd.current.humidity}</div>}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Weather