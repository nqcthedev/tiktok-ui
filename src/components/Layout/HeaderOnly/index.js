import Header from './Header';
import React from 'react';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
