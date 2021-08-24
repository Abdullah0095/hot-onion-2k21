import React from 'react';
import backGround from '../../photos/bannerbackground.png';


const Header = () => {
    
    const headerStyle={
        backgroundImage: `url(${backGround})`,
        marginLeft: '-100px',
        height: "500px",
        textAlign: "center"
    }

    return (
    <div style={headerStyle}>
        <div style={{marginLeft: '200px'}}>
        <h1>Best Food Waiting For Your Belly</h1>
            <input style={{border: 'none', height: '40px', borderRadius: '20px'}}  type="text" placeholder="search food item" size= '70' />
            <button id="headerButton">search</button>
        </div>
        </div>
    );
};

export default Header;