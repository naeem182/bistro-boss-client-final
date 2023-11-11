
const Menuitem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-3">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[104px] h-24" src={image} alt="" />
            <div>
                <h1>
                    {name}........
                </h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>


        </div>
    )
}

export default Menuitem
