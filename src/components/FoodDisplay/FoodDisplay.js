import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const FoodDisplay = () => {
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Breakfast">

                </Tab>
                <Tab eventKey="profile" title="Lunch">

                </Tab>
                <Tab eventKey="contact" title="Dinner">

                </Tab>
            </Tabs>
        </div>
    );
};

export default FoodDisplay;