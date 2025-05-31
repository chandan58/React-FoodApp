import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData)
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = resData;
  
  return (
    <div className="rounded-lg bg-gray-200 hover:bg-gray-400 cursor-pointer">
      <img
        className="p-4 m-4 rounded-lg"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt={name}
      />
      <h3 className="m-2 font-bold text-lg">{name}</h3>
      <p className="m-2">{cuisines.join(", ")}</p>
      <p className="m-2">{avgRating}</p>
      <p className="m-2">{costForTwo}</p>
      <p className="m-2">{sla?.slaString}</p>
    </div>
  );
};


  export const isOpenRestraurant = (RestaurantCard) => {
    return (props) => {
      return (
        <div className="relative m-4 p-4 w-[230px]">
          <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded text-xs">
            Opened
          </label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };
  

export default RestaurantCard;