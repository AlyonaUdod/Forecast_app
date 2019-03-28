import {combineReducers} from 'redux';
import todayForecast from './todayForecastReducer';
import fiveDaysForecast from './fiveDaysForecastReducer';
import seachHistory from './seachHistoryReducer';
import requestError from './requestErrorReducer'

const rootReducers = combineReducers({
   todayForecast,
   fiveDaysForecast,
   seachHistory,
   requestError,
});

export default rootReducers;
