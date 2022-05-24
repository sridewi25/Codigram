import React, { useEffect } from "react";
import "../Home/PageHome/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  detailposting,
  getpostings_user,
  deleteposting,
  updateposting,
  
} from "../../actions/PostingAction";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'

function UserPostings() {

  const {
    getPostingsUserResult,
    getPostingsUserLoading,
    getPostingsUserError,
    deletePostingUserResult
  } = useSelector((state) => state.postingReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if(deletePostingUserResult){
      Swal.fire(
        'Delete Successfully!',
        'Clicked the button!',
        'success'
      )
      dispatch(getpostings_user(localStorage.getItem("access_token")))
    }
  })

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getpostings_user(localStorage.getItem("access_token")));
  }, [dispatch]);

  return (
    <>
      <div className="color-full-page">
        <div className="container-sm">
          <div className="row row-bg">
            <div className=" justify-content-center input-group flex-nowrap input-align">
              <Link className="btn text-add-1" to="add">
                <span>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </span>{" "}
                Add Posting
              </Link>
            </div>
            {getPostingsUserResult ? (
              getPostingsUserResult.map((e) => {
                return (
                  <>
                    <div className="col-md-6 offset-md-3 line-white"></div>
                    <div className="col-md-6 offset-md-3 col-bg">
                      <h4>{e.user.name}</h4>
                      <h6>
                        {e.user.country}, <span>{e.createdAt}</span>
                      </h6>
                      <img
                        src={require(`../../file_image/${e.image}`)}
                        className="img-fluid img-thumbnail mx-auto d-block"
                        alt=""
                      ></img>
                      <p>
                        <span className="text-bold">{e.user.name} - </span>
                        {e.posting}
                      </p>
                      <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                        <Link
                          className="btn btn-sm btn btn-outline-success"
                          onClick={() => dispatch(detailposting(e))}
                          to={`edit/${e.id}`}
                        >
                          <span>
                            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                          </span>{" "}
                          Edit
                        </Link>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => dispatch(deleteposting(localStorage.getItem("access_token"),e.id))}
                        >
                          <span>
                            <FontAwesomeIcon
                              icon={faTrashCan}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Delete
                        </button>
                      </div>

                      <br></br>
                    </div>
                  </>
                );
              })
            ) : getPostingsUserLoading ? (
              <p>Loading</p>
            ) : (
              <p>
                {getPostingsUserError ? getPostingsUserError : "Data Kosong"}
              </p>
            )}
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
}

export default UserPostings;
