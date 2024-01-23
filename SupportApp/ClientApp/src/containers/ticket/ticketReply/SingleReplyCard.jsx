import React from "react";

const SingleReplyCard = (props) => {
  return (
    <>
      <div className="bg primary">
        <h3>{`${props.reviewerId} :: ${props.reviewNote}`}</h3>
        <p>{`time : ${props.createdAt}`}</p>
      </div>
    </>
  );
};

export default SingleReplyCard;
