import {
  GET_POSTINGS,
  GET_POSTINGS_USERS,
  GET_POSTINGS_USER,
  ADD_POSTING,
  UPDATE_POSTING,
  DETAIL_POSTING,
  DELETE_POSTING,
  GET_DETAIL_POSTINGS,
} from "../../actions/PostingAction";

const initialState = {
  getPostingsResult: false,
  getPostingsLoading: false,
  getPostingsError: false,

  getPostingsUsersResult: false,
  getPostingsUsersLoading: false,
  getPostingsUsersError: false,

  getPostingsUserResult: false,
  getPostingsUserLoading: false,
  getPostingsUserError: false,

  addPostingUserResult: false,
  addPostingUserLoading: false,
  addPostingUserError: false,

  updatePostingUserResult: false,
  updatePostingUserLoading: false,
  updatePostingUserError: false,

  detailPostingResult: false,

  deletePostingUserResult: false,
  deletePostingUserLoading: false,
  deletePostingUserError: false,

  getDetailPostingUserResult: false,
  getDetailPostingUserLoading: false,
  getDetailPostingUserError: false,
};

const postingsUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTINGS:
      return {
        ...state,
        getPostingsResult: action.payload.data,
        getPostingsLoading: action.payload.loading,
        getPostingsError: action.payload.errorMessage,
      };
    case GET_POSTINGS_USERS:
      return {
        ...state,
        getPostingsUsersResult: action.payload.data,
        getPostingsUsersLoading: action.payload.loading,
        getPostingsUsersError: action.payload.errorMessage,
      };
    case GET_POSTINGS_USER:
      return {
        ...state,
        getPostingsUserResult: action.payload.data,
        getPostingsUserLoading: action.payload.loading,
        getPostingsUserError: action.payload.errorMessage,
      };
    case ADD_POSTING:
      return {
        ...state,
        addPostingUserResult: action.payload.data,
        addPostingUserLoading: action.payload.loading,
        addPostingUserError: action.payload.errorMessage,
      };
    case UPDATE_POSTING:
      return {
        ...state,
        updatePostingUserResult: action.payload.data,
        updatePostingUserLoading: action.payload.loading,
        updatePostingUserError: action.payload.errorMessage,
      };
    case DELETE_POSTING:
      return {
        ...state,
        deletePostingUserResult: action.payload.data,
        deletePostingUserLoading: action.payload.loading,
        deletePostingUserError: action.payload.errorMessage,
      };
    case GET_DETAIL_POSTINGS:
      return {
        ...state,
        getDetailPostingUserResult: action.payload.data,
        getDetailPostingUserLoading: action.payload.loading,
        getDetailPostingUserError: action.payload.errorMessage,
      };
    case DETAIL_POSTING:
      return {
        ...state,
        detailPostingResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default postingsUser;
