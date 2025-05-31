import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestraurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenu(json.data);
  };
  return resMenu;
};
export default useRestraurantMenu;
