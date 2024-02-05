import React from 'react';

const Intro = ({ image, title }) => {
    return (
        <div className="Intro">
            <img src={image} alt="Intro de haut page" />
            <div className="Intro"></div>
            <h1>{title}</h1>
        </div>
    );
};

export default Intro;