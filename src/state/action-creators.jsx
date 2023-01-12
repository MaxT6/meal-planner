import * as types from "./action-types";
import axios from "axios";



export const resetForm = () => {
  return({
    type: types.RESET_FORM
  })
};


export const fetchMeal = (number, tags, meal) => {
  console.log(" NEW MEAL:", meal)

 return function (dispatch) {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: number, tags: tags, q: meal},
    headers: {
      'X-RapidAPI-Key': 'cdbaf912cemsh15bcc1402bbea59p1ab744jsn58909e0ad7ce',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    console.log("response data", response.data);
    dispatch({
      type: types.SHOW_MEAL,
      payload: response.data
    })
  }).catch(function (error) {
    console.error(error);
  });
}
}