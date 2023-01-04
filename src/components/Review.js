import React from "react";
import * as s from "./StyledComponents";
import { AiFillStar } from "react-icons/ai";
import BgImage from "../assets/review1.jpg";

function UserWholeReview({ image, review, name }) {
  return (
    <s.User style={{ backgroundImage: `url(${BgImage})` }}>
      <s.UserReview>
        <AiFillStar size={24} />
        <AiFillStar size={24} />
        <AiFillStar size={24} />
        <AiFillStar size={24} />
        <AiFillStar size={24} />
        <s.UserReviewName>{name}</s.UserReviewName>
        <s.UserReviewText>{review}</s.UserReviewText>
      </s.UserReview>
    </s.User>
  );
}

export { UserWholeReview };
