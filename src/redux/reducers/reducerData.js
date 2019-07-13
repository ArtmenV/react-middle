import { RECEIVE_API_DATA } from "../ac";

const reducerData = (state = [ ], {type, data} )=> {
  switch(type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state
  }
}

export default reducerData