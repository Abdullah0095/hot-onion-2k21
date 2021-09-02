import React from 'react';
import Lunches from "../FoodData/launch";

const LunchDetails = () => {
    return (
        <div>
            {
                Lunches.map(lunch => <LunchesList lunch = {lunch}></LunchesList>)
            }
        </div>
    );

    function LunchesList (props){
        return (
            <div className="col-md-4">
                <h3>{props.lunch.title}</h3>
                <p>{props.lunch.description}</p>
                <h5>${props.lunch.price}</h5>
            </div>
        )
    }
};

export default LunchDetails;