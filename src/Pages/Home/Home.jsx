import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/category'
import PopulerMenu from '../PopulerMenu/PopulerMenu'
import Featured from '../Featured/Featured'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>

        </div>
    )
}

export default Home
