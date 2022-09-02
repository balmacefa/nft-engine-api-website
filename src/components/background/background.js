import React from 'react';
import './background.css';

export default function Background() {

    return (
        <>
            <div className="background">
                {[...Array(50)].map((x, i) =>
                    <span key={i}></span>
                )}
            </div>
        </>
    );
}
