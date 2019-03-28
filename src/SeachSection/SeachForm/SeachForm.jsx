import React, { Component } from 'react'
import { Input, Form, Button, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { queryTodayForecast } from '../../redux/actions/todayForecastAction';
import { queryFiveDaysForecast } from '../../redux/actions/fiveDaysForecastAction';
import { updateSeachHistory } from '../../redux/actions/seachHistoryAction';
import { clearRequestError } from '../../redux/actions/requestErrorAction'

import styles from './SeachForm.module.css'

class SeachForm extends Component {

    state = {
        text: '',
        reqError: '',
    }

    handlerChange = (e) => {
        this.setState({
            text: e.target.value
        }); 
    };

    getForecast = () => {
        let city = this.state.text;
        if(city){
            this.forecastQuery(city);
            setTimeout(() => {
                if(!this.props.requestError){
                    this.createHistory(city);
                }
            }, 1000)
        };
    };

    forecastQuery(city){
        this.props.getTodayForecast(city);
        this.props.getFiveDaysForecast(city);
    }

    createHistory = async(city) =>{
        await this.props.addCityToHistory(city.toLowerCase());
        localStorage.setItem('SeachHistory', JSON.stringify(this.props.seachHistory))
        this.setState({
            text: '',
        })
    }

    clearError=()=>{
        this.props.clearReqError()
    }

  render() {
      const {text} = this.state;
      const {requestError} = this.props;
    return (
       
        <Form className={styles.seachForm} onSubmit={this.getForecast}>
            { !/[a-zA-Z]/.test(text) && text && 
                <Message.Header className={styles.validError}>Use english, please.</Message.Header>
            }
            <Form.Group className={styles.formGroup}>
                <Input className={styles.seachFormInput} icon='search' autoFocus value={text} placeholder='Enter city...' onChange={this.handlerChange}/>
                <Button className={styles.seachFormButton} type='submit'>Seach</Button>
            </Form.Group>
            {requestError &&
            <div className={styles.requestError}>
                <Message negative>
                    <Message.Header>{requestError}</Message.Header>
                    <Button color='pink' style={{marginTop: '.5rem'}} onClick={this.clearError}>Ok, I'll try again</Button>
                </Message>
            </div>
            }
        </Form>
    )
  }
}

function MSTP (state){
    return {
        seachHistory: state.seachHistory,
        requestError: state.requestError,
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
        clearReqError: function(){
            dispatch(clearRequestError())
        }
    };
};

export default connect(MSTP, MDTP)(SeachForm);