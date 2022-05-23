import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faImage,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { get_posting_detail } from "../../../actions/PostingAction";
import { useParams } from "react-router-dom";

function DetailPosting() {
  const {
    getDetailPostingUserResult,
    getDetailPostingUserLoading,
    getDetailPostingUserError,
  } = useSelector((state) => state.postingReducer);

  const {id} = useParams()

  console.log(id)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(get_posting_detail(+id));
  },[ dispatch]);

  return (
    <div className="color-full-page">
    <div className="container-sm">
      <div className="row row-bg ">
        <div className="col-md-6 offset-md-3 line-white"></div>
          { getDetailPostingUserResult ? (
             getDetailPostingUserResult.map((e) => {
              return (
                <>
                <div className="col-md-6 offset-md-3 col-bg justify-content-center">
                  <br></br>
          <img
            className="img-fluid img-thumbnail img-responsive mx-auto d-block"
            src={require(`../../../file_image/${e.image}`)}
            alt=""
          />
          <br></br>
          <div className="card border-warning">
            <div className="card-body" style={{ width: "18rem" }}>
              <h5 className="card-title">
                <span>
                  <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
                </span> {" "}
                 Caption
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{e.posting}</h6>
            </div>
          </div>

          <br></br>
          <div className="card border-success">
            <div className="card-body" style={{ width: "18rem" }}>
              <h5 className="card-title">
                <span>
                  <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                </span> {" "}
                 Date Created
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{e.createdAt}</h6>
            </div>
          </div>
          <br></br>
          <div className="card border-danger">
            <div className="card-body" style={{ width: "18rem" }}>
              <h5 className="card-title">
                <span>
                  <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                </span> {" "}
                 Image Name
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{e.image}</h6>
            </div>
          </div>
          <br></br>
          <br></br>
          </div>
          </>
          )})
          ) :  getDetailPostingUserLoading ? (
            <p>Loading</p>
          ) : (
            <p>{ getDetailPostingUserError ?  getDetailPostingUserError : "Data Kosong"}</p>
          )}
       
      </div>
    </div>
  </div>
  )
}

export default DetailPosting