import React, { useEffect } from "react";
import "../PageHome/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getpostings_users,get_posting_detail } from "../../../actions/PostingAction";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function PageHomeAfterLogin() {
  const {
    getPostingsUsersResult,
    getPostingsUsersLoading,
    getPostingsUsersError,
  } = useSelector((state) => state.postingReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getpostings_users(localStorage.getItem("access_token")));
  }, [dispatch]);

  return (
    <>
      <div className="color-full-page">
        <div className="container-sm">
          <div className="row row-bg">
            {getPostingsUsersResult ? (
              getPostingsUsersResult.map((e) => {
                return (
                  <>
                    <div className="col-md-6 offset-md-3 line-white"></div>
                    <div className="col-md-6 offset-md-3 col-bg">
                      <h4>{e.user.name}</h4>
                      <h6>
                        {e.user.country}, <span>{e.createdAt}</span>
                      </h6>
                      <img
                        src={require(`../../../file_image/${e.image}`)}
                        className="img-fluid img-thumbnail mx-auto d-block"
                        alt=""
                      ></img>
                      <p>
                        <span className="text-bold">{e.user.name} - </span>
                        {e.posting}
                      </p>
                      <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                      <Link
                        className="btn btn-sm btn btn-outline-primary"
                        onClick={() => dispatch(get_posting_detail(e.id))}
                        to={`info/${e.id}`}
                      >
                         <span>
                          <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
                        </span> {" "} 
                         Info
                      </Link>
                      </div>
                      <br></br>
                    </div>
                  </>
                );
              })
            ) : getPostingsUsersLoading ? (
              <p>Loading</p>
            ) : (
              <p>
                {getPostingsUsersError ? getPostingsUsersError : "Data Kosong"}
              </p>
            )}
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
}

export default PageHomeAfterLogin;
