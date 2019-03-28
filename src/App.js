import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'; 
import { queryTodayForecast } from './redux/actions/todayForecastAction';
import { queryFiveDaysForecast } from './redux/actions/fiveDaysForecastAction';
import styles from './App.module.css';
import SeachForm from './SeachSection/SeachForm/SeachForm';
import SeachHistory from './SeachSection/SeachHistory/SeachHistory';
import { getSeachHistory } from './redux/actions/seachHistoryAction';
import MenuForecast from './ForecastSection/MenuForecast/MenuForecast';
import TodayForecast from './ForecastSection/TodayForecast/TodayForecast';
import FiveDaysForecast from './ForecastSection/FiveDaysForecast/FiveDaysForecast';

class App extends Component {

  componentDidMount(){
    this.props.getTodayForecast();
    this.props.getFiveDaysForecast();
    if(JSON.parse(localStorage.getItem('SeachHistory'))){
      let history = JSON.parse(localStorage.getItem('SeachHistory'))
      this.props.getHistory(history)
    }
  }


  render() {
    return (
      <div className={styles.App}>
        <div className={styles.seachSection}>
          <SeachForm/>
          <SeachHistory/>
        </div>
        <div className={styles.forecastSection}>
          <MenuForecast/>  
          <Switch>
            <Route exact path='/' component={TodayForecast}/>
            <Route path='/fivedays' component={FiveDaysForecast}/>
          </Switch>
        </div>
      </div>
    );
  }
}

function MSTP (state){
  return {
      todayForecast: state.todayForecast,
      fiveDaysForecast: state.fiveDaysForecast,
  };
};

function MDTP (dispatch){
  return {
      getTodayForecast: function(){
          dispatch(queryTodayForecast());
      },
      getFiveDaysForecast: function(){
          dispatch(queryFiveDaysForecast());
      },
      getHistory: function(data){
        dispatch(getSeachHistory(data))
      }
  };
};

export default connect(MSTP, MDTP)(App);