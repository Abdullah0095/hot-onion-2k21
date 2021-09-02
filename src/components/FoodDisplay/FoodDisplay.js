import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import BreakfastDetails from '../BreakfastDetails/BreakfastDetails';
import DinnerDetails from '../DinnerDetails/DinnerDetails';
import LunchDetails from '../LunchDetails/LunchDetails';

const FoodDisplay = () => {
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Breakfast">
                    <BreakfastDetails/>
                </Tab>
                <Tab eventKey="profile" title="Lunch">
                    <LunchDetails/>
                </Tab>
                <Tab eventKey="contact" title="Dinner">
                    <DinnerDetails/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default FoodDisplay;