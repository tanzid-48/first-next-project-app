import React from 'react';

const AppsCard = ({app}) => {

    const {title} = app;

    return (
        <div>
            <h2>All trending apps here</h2>
            <h3>{title}</h3>
        </div>
    );
};

export default AppsCard;