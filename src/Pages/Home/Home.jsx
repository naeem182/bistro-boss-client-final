import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/category'
import PopulerMenu from '../PopulerMenu/PopulerMenu'
import Featured from '../Featured/Featured'
import Review from '../Reviews/Review'
import { Helmet } from 'react-helmet'
import Menu from '../OurMenu/Menu'



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>

            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Review></Review>
            <Menu></Menu>

        </div>
    )
}

export default Home
