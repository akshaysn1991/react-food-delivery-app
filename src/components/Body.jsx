import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
  
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
       fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9629354&lng=77.7122996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return (
        <div className="body">
          <div className="filter">

            <div className="search">
                <input type="text"
                  className="search-box"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    const filteredRestaurants = allRestaurants.filter(
                       (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setRestaurants(filteredRestaurants);
                  }}
                >
                  Search
                </button>
            </div>
            <button 
                className="filter-btn" 
                onClick={() => {
                    const filteredRestaurants = allRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setRestaurants(filteredRestaurants);
                }}
            >
                Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {
              restaurants?.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              ))
            }
          </div>
        </div>
    );
  };

  export default Body;