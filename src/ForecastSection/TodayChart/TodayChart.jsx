import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment'
import { connect } from 'react-redux';

const TodayChart = ({tF, fDF}) => {

    function getTemp(){
        let temp = fDF.map(el => el.main.temp);
        temp.unshift(tF.main.temp);
        return temp.filter((el,index) => index <8);
    };

    function getWind(){
        let wind = fDF.map(el => el.wind.speed);
        wind.unshift(tF.wind.speed);
        return wind.filter((el,index) => index <8);
    };

    function getHum(){
        let hum = fDF.map(el => el.main.humidity);
        hum.unshift(tF.main.humidity);
        return hum.filter((el,index) => index <8);
    };

    function getPres(){
        let pres = fDF.map(el => (el.main.pressure/1.33));
        pres.unshift(tF.main.pressure);
        return pres.filter((el,index) => index <8);
    };
   
    function getTime(){
        let time = fDF.map(el => moment(`"${el.dt.toString()}"`, "X").format('HH:mm'));
        time.unshift(moment(`"${tF.dt.toString()}"`, "X").format('HH:mm'));
        return time.filter((el,ind) => ind < 8);
    };

const option = {
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          color: "grey"
        },
        scaleLabel: {
           display: true,
           labelString: "Units",  
           fontSize: '10',
           fontFamily: 'Josefin Sans, sans-serif',
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          color: "black",
          borderDash: [2, 5],
        },
        scaleLabel: {
           display: true,
           labelString: "Time",  
           fontSize: '12',
           fontFamily: 'Josefin Sans, sans-serif',
        },
      }]
    }
};

let WetChart = {
    labels: getTime(),
    datasets: [
        {
            label: `Temperature, C` ,
            data: getTemp(),
            borderColor: 'rgb(255,0,0)',
            backgroundColor:'rgba(255,0,0, .3)',
            fill: true,
            hidden: false,
            type: 'line',
            radius: '3',
            hoverBorderWidth: '5',
            showTooltip: true,
          }, {
            hidden: true,
            label: 'Wind, m/s',
            data: getWind(),
            borderColor: 'rgb(255, 255, 0)',
            backgroundColor: 'rgb(255,255,0, .3)',
            type: 'line',
            radius: '3',
            hoverBorderWidth: '5',
            fill: true,
          }, {
            hidden: true,
            label: 'Humidity, %',
            data: getHum(),
            borderColor: 'rgb(0,0,255)',
            backgroundColor: 'rgb(0,0,255, .3)',
            type: 'line' ,
            radius: '3',
            hoverBorderWidth: '5',
            fill: true,
          }, {
            hidden: true,
            label: 'Pressure, mm Hg',
            data: getPres(),
            borderColor: 'rgb(0,255,0)',
            backgroundColor: 'rgb(0,255,0, .3)',
            type: 'line' ,
            radius: '3',
            hoverBorderWidth: '5',
            fill: true,
          }],    
};
        return (
            <Line data={WetChart} options={option} redraw/> 
        );
};

function MSTP (state){
    return {
        tF: state.todayForecast,
        fDF: state.fiveDaysForecast,
    };
};

export default connect(MSTP, null)(TodayChart);