import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/category'
import PopulerMenu from '../PopulerMenu/PopulerMenu'
import Featured from '../Featured/Featured'
import Review from '../Reviews/Review'



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Review></Review>

        </div>
    )
}

export default Home
