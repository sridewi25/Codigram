import axios from "axios";

const POST_USERS = "POST_USERS";
const GET_USER = "GET_USER"

const adduser = (data) => {
  console.log("2.");
  return (dispatch) =>{
    // untuk loading
  dispatch({
    type: "POST_USERS",
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API 
  axios({
    method: "POST",
    url: "http://localhost:3000/users/register",
    timeout: 120000,
    data:data
  })
    .then((response) => {
      console.log("3.", response.data);
      dispatch({
        type: "POST_USERS",
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: "POST_USERS",
        payload: {
          loading: false,
          data: error.message,
          errorMessage: false,
        },
      });
      console.log(error.message)
    });
  }
};

const get_profile_user = (access_token) => {
  return (dispatch) =>{
    // untuk loading
  dispatch({
    type: "GET_USER",
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API 
  axios({
    method: "GET",
    url: "http://localhost:3000/users/info_user",
    timeout: 120000,
    headers: {
      Access_Token:access_token
    },
  })
    .then((response) => {
    
      dispatch({
        type: "GET_USER",
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_USER",
        payload: {
          loading: false,
          data: error.message,
          errorMessage: false,
        },
      });
    });
  }
};

export { adduser, POST_USERS,GET_USER,get_profile_user };
