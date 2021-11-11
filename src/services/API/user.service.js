import { fetch } from "../fetch.services"; //Imported optimised Fetch protocol method

export const geTestData = (data, options) => {
  //Call the Get API of jsonPlaceHolder(Dummy API) to get the Posts **https://jsonplaceholder.typicode.com/posts**
  return fetch(
    "get",
    `https://jsonplaceholder.typicode.com/comments?postId=1`,
    {},
    {}
  );
};

export const postTestData = (data, options) => {
  console.log(`data --- api`, data, options);
  //Can pass the options for authentication token, header details etc. NOTE: Not needed in dummy API's
  //Call the Post API of jsonPlaceHolder(Dummy API) to Post the Created Post **https://jsonplaceholder.typicode.com/posts**
  return fetch(
    "get",
    `https://jsonplaceholder.typicode.com/comments?postId=1`,
    data,
    {}
  );
};
