import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../utils/useRestraurantMenu";
import RestraurantCategory from "./RestraurantCategory";
import { useState } from "react";

const RestraurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestraurantMenu(resId);
  const [shownIndex, setShowIndex] = useState(null);

  const itemsCard =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (resMenu === null) {
    return <Shimmer />;
  }

  return (
    <div className="text-center py-4">
      <h1 className="font-bold my-5 text-2xl">
        {resMenu?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h2 className="font-bold">
        {resMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h2>
      {categories.map((categories, index) => {
        return (
          <RestraurantCategory
            key={categories?.card?.card?.title}
            categoriesData={categories?.card?.card}
            showList={index === shownIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestraurantMenu;
