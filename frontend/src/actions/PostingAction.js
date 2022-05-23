import axios from "axios";

const GET_POSTINGS = "GET_POSTINGS";
const GET_POSTINGS_USERS = "GET_POSTINGS_USERS";
const GET_POSTINGS_USER = "GET_POSTINGS_USER";
const ADD_POSTING = "ADD_POSTING";
const UPDATE_POSTING = "UPDATE_POSTING";
const DETAIL_POSTING = "DETAIL_POSTING";
const DELETE_POSTING = "DELETE_POSTING";
const GET_DETAIL_POSTINGS = "GET_DETAIL_POSTINGS";

const getpostings = () => {
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "GET_POSTINGS",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/postings",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: "GET_POSTINGS",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POSTINGS",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};

const getpostings_users = (access_token) => {
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "GET_POSTINGS_USERS",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/postings/search_posting",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_POSTINGS_USERS",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POSTINGS_USERS",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};

const getpostings_user = (access_token) => {
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "GET_POSTINGS_USER",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/postings/postings_user",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_POSTINGS_USER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POSTINGS_USER",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};


const get_posting_detail = (data) => {
  return (dispatch) => {
    // untuk loading
    console.log(data)
    dispatch({
      type: "GET_DETAIL_POSTINGS",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: `http://localhost:3000/postings/info_posting/${data}`,
      timeout: 120000,
      
    })
      .then((response) => {
        dispatch({
          type: "GET_DETAIL_POSTINGS",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_DETAIL_POSTINGS",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};


const updateposting = (access_token, data) => {
  console.log("2.");
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "UPDATE_POSTING",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "PUT",
      url: `http://localhost:3000/postings/update_posting/${data.id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
      data: data,
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "UPDATE_POSTING",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_POSTING",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
        console.log(error.message);
      });
  };
};

const addposting = (access_token, data) => {
  console.log("2.");
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "ADD_POSTING",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: "http://localhost:3000/postings/create_posting",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
      data: data,
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "ADD_POSTING",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_POSTING",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
        console.log(error.message);
      });
  };
};

const deleteposting = (access_token, id) => {
  console.log("2.");
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "DELETE_POSTING",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "DELETE",
      url: `http://localhost:3000/postings/delete_posting/${id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "DELETE_POSTING",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_POSTING",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
        console.log(error.message);
      });
  };
};

const detailposting = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_POSTING,
      payload: {
        data: data,
      },
    });
  };
};

export {
  getpostings,
  GET_POSTINGS,
  GET_POSTINGS_USERS,
  getpostings_users,
  GET_POSTINGS_USER,
  getpostings_user,
  ADD_POSTING,
  addposting,
  UPDATE_POSTING,
  updateposting,
  DETAIL_POSTING,
  detailposting,
  DELETE_POSTING,
  deleteposting,
  GET_DETAIL_POSTINGS,
  get_posting_detail
};
