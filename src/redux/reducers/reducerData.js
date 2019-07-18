import { RECEIVE_API_DATA } from "../ac";
import { List} from "immutable";
//
// const initialState_ = Record (
//   {
//     initialState_: new List([])
//   }
// )
//
//
// const initialState = Record (
//   {
//   userId: null,
//   id: null,
//   title: null,
//   body: null,
//   }
// )


const reducerData = (state = List('data'), action )=> {
  const {type, data} = action
  switch(type) {
    case RECEIVE_API_DATA:
      return data
    default:
      return state
  }
}

export default reducerData