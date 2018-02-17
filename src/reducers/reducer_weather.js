import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.push(action.payload.data); WRONG do not modify a state only return a new state
      // return state.concat([action.payload.data]); or ES6 syntax below
      console.log(action.payload.data.cod);
      if(action.payload.data.cod == "404") {
        return state;
      } else {
        return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [ city, city ] ]
      }
  }

  return state;
}
