import React from "react";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="home" id="Home"></div>
            <div class="max-w-sm  rounded-lg random">
                {/* <img class="rounded-t-lg" src="../images/city.jpg" alt="" /> */}
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold ">
                            Get Ready for Any Weather with Weather Cast
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Welcome to Weather Cast, the ultimate weather forecasting tool! Our
                        app provides real-time updates, hourly and daily forecasts, and radar maps. With our user-friendly interface and
                        reliable information, you can plan your day and stay ahead of any
                        weather changes
                    </p>
                    <div className="search-btn">
                        <a
                            href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Search Weather
                            <svg
                                aria-hidden="true"
                                class="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
