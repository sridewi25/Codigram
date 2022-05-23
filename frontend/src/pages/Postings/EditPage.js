import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import image_bg from "./bg-add-page.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateposting } from "../../actions/PostingAction";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function EditPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [posting, setPosting] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateposting(localStorage.getItem("access_token"), {
        image: image,
        posting: posting,
      })
    );
  };
  const { updatePostingUserResult, detailPostingResult } = useSelector(
    (state) => state.postingReducer
  );

  useEffect(() => {
    if (updatePostingUserResult) {
      Swal.fire("Update Successfully!", "Clicked the button!", "success");
      navigate("/postings");
    }
  });

  useEffect(() => {
    if (detailPostingResult) {
      setImage(detailPostingResult.image)
      setPosting(detailPostingResult.posting)
      setId(detailPostingResult.id)
    }
  },[detailPostingResult],[dispatch]);

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
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="input-group flex-nowrap input-align input-group-lg">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                </span>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  name="image"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align input-group-lg">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Caption"
                  name="posting"
                  value={posting}
                  onChange={(event) => setPosting(event.target.value)}
                  //
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                <button className="btn text-add" type="submit">
                  Edit Post
                </button>
              </div>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
