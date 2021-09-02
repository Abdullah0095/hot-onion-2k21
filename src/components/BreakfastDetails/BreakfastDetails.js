import React from 'react';
import Breakfasts from '../FoodData/breakfast';

const BreakfastDetails = () => {
    return (
        <div style={{height: '500px', marginTop: '50px'}}>
            {
                Breakfasts.map(breakfast => <BreakfastList breakfast={breakfast}></BreakfastList>)
            }
        </div>
    );
    function BreakfastList (props){
        return (
            <div className="foodCartStyle col-md-4">
                <h5>{props.breakfast.title}</h5>
                <p>{props.breakfast.description}</p>
                <h6>${props.breakfast.price}</h6>
            </div>
        )

    }
};

export default BreakfastDetails;