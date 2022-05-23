import { POST_USERS, GET_USER } from "../../actions/UserAction";

const initialState = {
  addUsersResult : false,
  addUsersLoading : false,
  addUsersError: false,

  getUsersResult : false,
  getUsersLoading : false,
  getUsersError: false
}


const adduser = (state = initialState, action) => {
  switch(action.type){
    case POST_USERS:
      return{
        ...state,
        addUsersResult : action.payload.data,
        addUsersLoading : action.payload.loading,
        addUsersError: action.payload.errorMessage
      }
      case GET_USER:
      return{
        ...state,
        getUsersResult : action.payload.data,
        getUsersLoading : action.payload.loading,
        getUsersError: action.payload.errorMessage
      }
      default:
        return state;
  }
};

export default adduser;
