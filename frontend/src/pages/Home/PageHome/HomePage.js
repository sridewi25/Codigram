import React, { useEffect } from "react";
import "../PageHome/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getpostings } from "../../../actions/PostingAction";
import { useDispatch, useSelector } from "react-redux";



function HomePage() {
  const { getPostingsResult, getPostingsLoading, getPostingsError } =
    useSelector((state) => state.postingReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getpostings());
  }, [dispatch]);


  return (
    <div className="color-full-page">
      <div className="container-sm">
        <div className="row row-bg">
          
            {getPostingsResult ? (
              getPostingsResult.map((e) => {
                return (
                  <>
                  <div className="col-md-6 offset-md-3 line-white"></div>
                  <div className="col-md-6 offset-md-3 col-bg">
                  <h4>{e.user.name}</h4>
                  <h6>{e.user.country}, <span>{e.createdAt}</span></h6>
                  <img src={require(`../../../file_image/${e.image}`)} className="img-fluid img-thumbnail mx-auto d-block" alt=""></img>
                  <p><span className="text-bold">{e.user.name} - </span>{e.posting}</p>
                  <br></br>
                  </div>
                  </>
                )})
            ) : getPostingsLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getPostingsError ? getPostingsError : "Data Kosong"}</p>
            )}
           
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default HomePage;
