import { useEffect, useState } from "react";

const usemenu = () => {
    const [menu, setMenu] = useState([]);
    // console.log(menu)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                // console.log(data)
                setLoading(false);
            });
    }, [])
    return [menu, loading]
}

export default usemenu;