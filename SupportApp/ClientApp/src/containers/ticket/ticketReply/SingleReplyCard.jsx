import React from "react";

const SingleReplyCard = (props) => {
  return (
    <>
      <div className="bg primary">
        <h3>{props.reviewNote}</h3>
      </div>
    </>
  );
};

export default SingleReplyCard;
