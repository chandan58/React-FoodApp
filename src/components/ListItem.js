
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ListItem = ({ itemList }) => {
 const dispatch = useDispatch()

  const handleAddClick = (item) =>{
    dispatch(addItem(item))
  }

  return (
    <div>
      {itemList.map((item) => (
        <div
        data-testid="item"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-3/12 align-middle">
            <img src={`${CDN_URL}/${item?.card?.info?.imageId}`} />
            <button className="bg-black text-white px-5  py-1 my-1rounded-lg ml-5" onClick={()=>handleAddClick(item)}>
              - Add +
            </button>
          </div>
          <div className="w-9/12">
            <span className="font-medium py-2">{item?.card?.info?.name}</span>{" "}
            <span>
              ₹
              {item?.card?.info?.price
                ? item.card.info.price / 100
                : item?.card?.info?.defaultPrice
                ? item.card.info.defaultPrice / 100
                : ""}
            </span>
            <p className="text-xs">{item?.card?.info?.description}</p>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListItem;
