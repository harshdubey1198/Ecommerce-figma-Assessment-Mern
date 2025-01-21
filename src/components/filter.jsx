import React from "react";

function Filter() {
  return (
    <div
      style={{
        background: "#F9F1E7",
        height: "100px",
        paddingTop: "29.5px", paddingBottom: "29.5px"
      }}
      className="d-flex align-items-center px-4 justify-content-between"
    >
      {/* Left Section: Filter Icon and Text */}
      <div className="d-flex align-items-center">
        <i
          className="bi bi-funnel"
          style={{
            fontSize: "24px",
            marginRight: "10px",
          }}
        ></i>
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "400",
            color: "#000",
          }}
        >
          Filter
        </span>
      </div>

      {/* Middle Section: View Options and Results Info */}
      <div className="d-flex align-items-center">
        <i
          className="ci ci-grid-big-round"
          style={{
            fontSize: "28px",
            marginRight: "15px",
          }}
        ></i>
        <i
          className="bi bi-view-list"
          style={{
            fontSize: "24px",
            marginRight: "20px",
          }}
        ></i>
        <div
          style={{
            borderLeft: "2px solid #9F9F9F",
            height: "24px",
            marginRight: "15px",
          }}
        ></div>
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "400",
            color: "#000",
          }}
        >
          Showing 1–16 of 32 results
        </span>
      </div>

      {/* Right Section: Show and Sort Options */}
      <div className="d-flex align-items-center">
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "400",
            color: "#000",
            marginRight: "10px",
          }}
        >
          Show
        </span>
        <div
          style={{
            background: "#FFF",
            width: "55px",
            height: "55px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "20px",
            border: "1px solid #9F9F9F",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "400",
              color: "#9F9F9F",
            }}
          >
            16
          </span>
        </div>
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "400",
            color: "#000",
            marginRight: "10px",
          }}
        >
          Short by
        </span>
        <div
          style={{
            background: "#FFF",
            width: "188px",
            height: "55px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #9F9F9F",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "400",
              color: "#9F9F9F",
            }}
          >
            Default
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
