import React, { useState } from 'react';
import orderimg from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import usemenu from '../../hooks/usemenu';
import TabOrder from './TabOrder';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = usemenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Cover title={'Order food'} img={orderimg}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <TabOrder items={pizza}></TabOrder>
                </TabPanel>
                <TabPanel>
                    <TabOrder items={salad}></TabOrder>
                </TabPanel>
                <TabPanel>
                    <TabOrder items={soup}></TabOrder>
                </TabPanel>
                <TabPanel>
                    <TabOrder items={desserts}></TabOrder>
                </TabPanel>
                <TabPanel>
                    <TabOrder items={drinks}></TabOrder>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
