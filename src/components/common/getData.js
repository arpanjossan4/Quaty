import React ,{useEffect,useState}from "react";

import { useDispatch , useSelector} from "react-redux";
import {
  getTestAction,
  postDataAction,
} from "../../redux/actions/user.actions";
import TableData1 from "./TableData1"
import { geTestData } from "../../services/API/user.service";

export default function GetData ()  {
  const dispatch = useDispatch();
useEffect(() => {
     dispatch(getTestAction())
 
}, [])


  const state =  useSelector(state => state.usersReducer.userApiData)
  console.log(`state`, state)
 
  
  return (
    <div>
      <h1> test </h1>
      {Object.keys(state).length > 0 &&
      <TableData1 data={state} />
      }

      
    </div>
  );
}
