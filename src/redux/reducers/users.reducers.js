import * as types from "../../constants/types";

const initialState = {
  //Define the state variable to store the API response data through thunk actions
  userApiData:{},
  postData: {},
};

export default function testTwoReducer(state = initialState, action) {
  console.log(`action.payload`, action.payload);
  switch (action.type) {
    case types.USERS_API_DATA:
      return { ...state, userApiData: action.payload };

    //Set the data to redux store through reducer
    //eg: return { ...state, userApiData: action.payload }
    case "postData":
      return { ...state, postData: action.payload };
    default:
      return state;
  }
}
