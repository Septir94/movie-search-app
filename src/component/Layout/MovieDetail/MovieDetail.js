import React from "react";
import "./movieDetail.css";

export default function MovieDetail({ data }) {
  return (
    <div className="detail-container">
      <div className="detail-image-container">
        <img src={data == null ? "" : data.Poster} alt="detail poster"></img>
      </div>
      <div className="content-container">
        {data !== null
          ? Object.keys(data).map((key) => {
              if (key !== "Ratings" && key !== "Poster") {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "left",
                      marginRight: "1em",
                      width: "100%",
                    }}
                  >
                    <label style={{ width: "10%" }}>{key}</label>
                    <label style={{ width: "20%" }}>:</label>
                    <label style={{ width: "50%" }}>{data[key]}</label>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
}
