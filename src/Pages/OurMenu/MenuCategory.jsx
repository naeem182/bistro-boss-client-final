import React from 'react';
import Cover from '../Shared/Cover';
import Menuitem from '../Shared/MenuItem/Menuitem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    console.log(items)
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items?.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    ></Menuitem>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline text-center border-0 border-b-4 mt-4 mx-auto">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
