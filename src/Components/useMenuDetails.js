import { useEffect, useState } from "react";
import Restaurant_Menu from "../Constants/MENU_API";

const useMenuDetails = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const menus = Array.isArray(Restaurant_Menu) ? Restaurant_Menu : [Restaurant_Menu];

    const getInfo = (menu) =>
      menu?.data?.cards?.find(
        (v) =>
          v.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )?.card?.card?.info;

    const targetMenu = menus.find((m) => String(getInfo(m)?.id) === String(resId));
    if (!targetMenu) {
      setResInfo(null);
      setCategories([]);
      return;
    }

    const info = getInfo(targetMenu);
    setResInfo(info ?? null);

    const regularCards =
      targetMenu?.data?.cards?.find((v) => v.groupedCard)?.groupedCard
        ?.cardGroupMap?.REGULAR?.cards || [];

    const itemCards = regularCards
      .map((c) => c.card?.card)
      .filter(
        (card) =>
          card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    setCategories(itemCards);
  }, [resId]);

  return { resInfo, categories };
};

export default useMenuDetails;
