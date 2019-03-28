import axios from 'axios';

export function getTodayForecast(param){
    return (axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=7ed6ba32164c3f1c39aaeeecdc77928f&q=${`${param ? param : 'Kiev'}`}&units=metric`));
};

export function getFiveDaysForecast(param){
    return (axios.get(`https://api.openweathermap.org/data/2.5/forecast?APPID=7ed6ba32164c3f1c39aaeeecdc77928f&q=${`${param ? param : 'Kiev'}`}&units=metric`));
};