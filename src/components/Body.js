import RestaurantCard, {isOpenRestraurant} from "./RestraurantsCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Body = () => {
  const [resObjList, setResObjList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([])
  const [searchText, setSearchText] = useState("");
  const RestraurantOpenStatus = isOpenRestraurant(RestaurantCard);
   const {setUserName, loggedInUser} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setResObjList(restaurants.map((r) => r.info));
    setFilteredRes( restaurants.map((r) => r.info))
  };

  const handleTopRatedFilter = () => {
    const filteredList = resObjList.filter((res) => res.avgRating > 4.6);
    setResObjList(filteredList);
  };
  const onLineStatus = useOnlineStatus();

  if (!onLineStatus) return <h1>Offline Mode, Please Check your internet connection</h1>;
  return resObjList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body  m-4 p-4 item-center">
      <input
        type="text"
        className="border border-solid border-black p-2 mb-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
      className="px-4 bg-green-500 ml-1 rounded-lg"
        onClick={() => {
          const filteredList = resObjList.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRes(filteredList);
        }}
      >
        Search
      </button>
      <button className="px-4 bg-green-500 ml-1 pl-4  rounded-lg" onClick={handleTopRatedFilter}>
        Top Rated Restaurants
      </button>
      <div>
        <label>Search Name : </label>
        <input className="border border-solid border-black p-2 mb-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
      </div>
      <div
        className="flex flex-wrap"
      >
         {filteredRes.map((restaurant) => (
          <Link key={restaurant?.id} to={`/restraurant/${restaurant?.id}`}>{restaurant?.isOpen ? <RestraurantOpenStatus resData={restaurant}/>:<RestaurantCard resData={restaurant} /> }</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
