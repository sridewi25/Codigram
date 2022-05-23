import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image_bg from "../Postings/bg-add-page.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faVenusMars,
  faFlag,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { get_profile_user } from "../../actions/UserAction";

function ProfilePage() {
  const {
    getUsersResult,
    getUsersLoading,
    getUsersError,
  } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(get_profile_user(localStorage.getItem("access_token")));
  }, [dispatch]);

  return (
    <div className="color-full-page">
      <div className="container-sm">
        <div className="row row-bg ">
          <div className="col-md-6 offset-md-3 line-white"></div>
          <div className="col-md-6 offset-md-3 col-bg justify-content-center">
            <img
              className="img-fluid img-responsive mx-auto d-block"
              src={image_bg}
              alt=""
            />
            <br></br>
            {getUsersResult ? (
              getUsersResult.map((e) => {
                return (
                  <>
                  
            <div className="card border-warning">
              <div className="card-body" style={{ width: "18rem" }}>
                <h5 className="card-title">
                  <span>
                    <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
                  </span> {" "}
                   Name
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{e.name}</h6>
              </div>
            </div>
            <br></br>

            <div className="card border-success">
              <div className="card-body" style={{ width: "18rem" }}>
                <h5 className="card-title">
                  <span>
                    <FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon>
                  </span> {" "}
                   Gender
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{e.gender}</h6>
              </div>
            </div>
            <br></br>
            <div className="card border-primary mb-3">
              <div className="card-body" style={{ width: "18rem" }}>
                <h5 className="card-title">
                  <span>
                    <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                  </span> {" "}
                   Country
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{e.country}</h6>
              </div>
            </div>
            <br></br>
            <div className="card border-danger">
              <div className="card-body" style={{ width: "18rem" }}>
                <h5 className="card-title">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span> {" "}
                   Email
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{e.email}</h6>
              </div>
            </div>
            <br></br>
            </>
            )})
            ) : getUsersLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getUsersError ? getUsersError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
