import React from 'react';
import style from './ForecastWrapper.module.css';

const ForecastWrapper = (props) => {
    return (
        <div className={style.ForecastWrapper}>  
            {props.children}
        </div>
    );
};

export default ForecastWrapper;