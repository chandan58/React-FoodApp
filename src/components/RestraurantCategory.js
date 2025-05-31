import ListItem from "./ListItem";
const RestraurantCategory = ({ categoriesData, showList, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className=" w-9/12 mx-auto my-2 bg-yellow-200 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {categoriesData.title} ({categoriesData.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
          {showList && <ListItem itemList={categoriesData.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestraurantCategory;
