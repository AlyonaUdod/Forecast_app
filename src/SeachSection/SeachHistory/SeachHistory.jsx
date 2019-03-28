import React from 'react';
import { connect } from 'react-redux';
import { queryTodayForecast } from '../../redux/actions/todayForecastAction';
import { queryFiveDaysForecast } from '../../redux/actions/fiveDaysForecastAction';
import { updateSeachHistory } from '../../redux/actions/seachHistoryAction';

import { List, Message, Header, Icon} from 'semantic-ui-react';
import styles from './SearchHistory.module.css';


const SeachHistory = ({seachHistory, getTodayForecast, getFiveDaysForecast, addCityToHistory, todayForecast}) => {

    function getForecast(city){
        console.log(todayForecast.name.toLowerCase(), city)
        if(todayForecast.name.toLowerCase() !== city){
            getTodayForecast(city);
            getFiveDaysForecast(city);
        }
        if(seachHistory[0] !== city){
            addCityToHistory(city);
        }
    }

    return (
        <List verticalAlign='middle'>
        <Header as='h2' style={{display: 'flex', justifyContent: 'center'}}>
            <Icon name='world' color='grey'/>
            <Header.Content>Seach History</Header.Content>
        </Header>
        {seachHistory.length > 0 ?
            seachHistory.map( (el,index) => 
            <List.Item key={el+index} className={styles.city}> 
                <List.Header as='a' onClick={()=> getForecast(el)}>{el}</List.Header>
            </List.Item>)
            : 
                <Message.Header style={{fontSize: '1.2rem', fontWeight: '700'}}> No city yet.</Message.Header>
        }
        </List>
    );
};

function MSTP (state){
    return {
        seachHistory: state.seachHistory,
        requestError: state.requestError,
        todayForecast: state.todayForecast,
    };
};
  
function MDTP (dispatch) {
    return {
        getTodayForecast: function(city){
            dispatch(queryTodayForecast(city));
        },
        getFiveDaysForecast: function(city){
            dispatch(queryFiveDaysForecast(city));
        },
        addCityToHistory: function(city){
            dispatch(updateSeachHistory(city))
        },
    };
};

export default connect(MSTP, MDTP) (SeachHistory);