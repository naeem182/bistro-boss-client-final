import FoodCard from "../Shared/FoodCard/FoodCard"

const TabOrder = ({ items }) => {
    return (
        <div className="grid  md:grid-cols-2 gap-10">
            {
                items?.map((item) => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    )
}

export default TabOrder
