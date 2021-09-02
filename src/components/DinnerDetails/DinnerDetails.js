import React from 'react';
import Dinners from '../FoodData/dinner';

const DinnerDetails = () => {
    return (
        <div>
            {
                Dinners.map(dinner => <DinnerList dinner={dinner}></DinnerList> )
            }
        </div>
    );

    function DinnerList (props){
        return (
            <div className="col-md-4">
                <h3>{props.dinner.title}</h3>
                <p>{props.dinner.description}</p>
                <h5>${props.dinner.price}</h5>
            </div>
        )
    }
};

export default DinnerDetails;