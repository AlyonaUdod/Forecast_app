import React from 'react';
import { List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MenuForecast = () => (
  <List horizontal link style={{display: 'flex', justifyContent:'center'}}>
    <List.Item style={{fontSize: '1.4rem', fontWeight:'500'}}><NavLink to='/'>Today</NavLink></List.Item>
    <List.Item style={{fontSize: '1.4rem', fontWeight:'500'}}><NavLink to='/fivedays'>Five Days</NavLink></List.Item>
  </List>
)

export default MenuForecast