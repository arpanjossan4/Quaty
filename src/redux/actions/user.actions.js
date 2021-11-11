import * as types from "../../constants/types";
import * as service from "../../services/API/user.service";

export const storeTestData = (data) => {
  return {
    //type should match the type used in reducer to store the data
    type: "GET TEST ONE API DATA",
    payload : data.data
  }
}
export const postData = (data) => {
  console.log(`postData`, data);
  return {
    //type should match the type used in reducer to store the data
    type: "postData",
    payload: data, //Store the data
  };
};

export const getTestAction = () => {
  console.log(`data at getaction`);
  return (dispatch, getState) => {
    //Used redux thunk action to call asynchronous method eg: Get the API response asynchronously
    //Call the API to get the result
    //Same method goes for Post Action
    return service
      .geTestData()
      .then(async (res) => {
        //Store the response in redux store by using reducer
          dispatch(storeTestData(res))
        console.log(`res`, res.data);
      })
      .catch((error) => {
        //Throw error
        //Handle the error by toast message or alert
      });
  };
};
export const postDataAction = (data) => {
  return (dispatch, getState) => {
    //Used redux thunk action to call asynchronous method eg: Get the API response asynchronously
    //Call the API to get the result
    //Same method goes for Post Action
    return service
      .postTestData(data)
      .then(async (res) => {
        console.log(`succes api`, res);
        //Store the response in redux store by using reducer
        //eg: dispatch(storeTestData(res))
        dispatch(postData(data));
      })
      .catch((error) => {
        //Throw error
        //Handle the error by toast message or alert
      });
  };
};
