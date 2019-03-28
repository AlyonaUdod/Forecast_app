import React, { Component } from 'react';
import Wrapper from '../ForecastWrapper/ForecastWrapper';
import {connect} from 'react-redux';
import style from './Today.module.css';
import TodayChart from '../TodayChart/TodayChart';
import moment from 'moment';

class TodayForecast extends Component{

    state = {
        isLoading: true,
    }

    componentDidMount(){
        if(this.props.tF.name && this.props.fDF.length > 0){
            this.setState({
                isLoading: false,
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                isLoading: false,
            })
        }  
    };

    getDate(){
        return moment().format('DD MMM, YYYY');
    };

    getIcon(){
        let src = `http://openweathermap.org/img/w/${this.props.tF.weather[0].icon}.png`;
        return <img src={src} alt= 'snow'/>;
    };

    
    render() {
        const {tF, fDF} = this.props;

    return (
        <div>
            <Wrapper>
                {!this.state.isLoading && tF.name && fDF.length > 0 ? 
                <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.leftSide}>
                            <h2 className={style.cityName}>{tF.name}, {tF.sys.country}</h2>
                            <p><span className={style.Temp}>{Math.round(tF.main.temp).toFixed(0)}</span>&deg;C.</p>
                            {this.getIcon()}
                            <p className={style.condition}>{tF.weather[0].description}</p>
                        </div>
                    
                        <div className={style.rightSide}>
                            <ul>
                                <li><h3>{this.getDate()}</h3></li>
                                <li>Pressure: {(tF.main.pressure/1.33).toFixed(0)}mm Hg.</li>
                                <li>Humidity: {tF.main.humidity}%.</li>
                                <li>Wind: {tF.wind.speed}m/s.</li>
                            </ul>  
                        </div>
                    </div>
                    <div className={style.chart}>
                       <TodayChart/>
                    </div>
                   
                </div> :

                <p>Loading</p>
            }
            
            </Wrapper> 
        </div>
        );
    };
};

function MSTP (state){
    return {
        tF: state.todayForecast,
        fDF: state.fiveDaysForecast,
    };
};

export default connect(MSTP, null) (TodayForecast);