import axios from 'axios';
export const COINS = 'COINS';
export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';
import { BASE_URL } from '../utils/urls';

export const addCoin = (coin) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/api/coins`, { coin })
      .then( ({ data, headers }) => dispatch({ type: ADD_COIN, coin: data, headers }) )
  }
}

export const getCoins = () => {
  return (dispatch) => {
    axios.get(`${ BASE_URL }/api/coins`)
      .then(({ data, headers }) => dispatch({ type: COINS, coins: data, headers }) )
  }
}

export const removeCoin = (id) => {
  return (dispatch) => {
    axios.put(`${ BASE_URL }/api/coins/${id}`)
      .then(({ headers }) => dispatch({ type: REMOVE_COIN, id, headers }) )
  }
}