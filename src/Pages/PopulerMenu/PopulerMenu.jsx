import { useEffect, useState } from "react"
import HEadingTittle from "../Shared/HEadingTittle"
import Menuitem from "../Shared/MenuItem/Menuitem";

const PopulerMenu = () => {
    const [menu, setmenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populariteam = data.filter(item => item.category === 'popular');
                setmenu(populariteam);
            })
    }, [])
    // console.log(menu)
    return (
        <div>
            <HEadingTittle
                subheading={'From Our Menu'}
                heading={'Popular Items'}
            >

            </HEadingTittle>
            <div className="grid md:grid-cols-2 gap-4 p-4">
                {menu.map(item => <Menuitem key={item._id}
                    item={item}></Menuitem>

                )}
            </div>



        </div >
    )
}

export default PopulerMenu
