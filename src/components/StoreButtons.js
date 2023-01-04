import React from "react";
import iphoneLogo from "../assets/appstore.webp";
import androidLogo from "../assets/googstore.webp";
import * as s from "./StyledComponents";
import styled from "styled-components";

const StoreButtons = ({ isReviews }) => {
  return (
    <s.StoreButtonsContainer isReviews={isReviews}>
      <s.AppStoreLogoContainer>
        <a
          href="https://apps.apple.com/ca/app/rankd-national-tennis-league/id1574120171"
          target="_blank"
          rel="noreferrer"
        >
          <s.StoreLogo src={iphoneLogo} alt="Hello" />
        </a>
      </s.AppStoreLogoContainer>
      <s.StoreLogoContainer>
        <a
          href="https://play.google.com/store/apps/details?id=com.rankd"
          target="_blank"
          rel="noreferrer"
        >
          <s.StoreLogo src={androidLogo} alt="Hello" />
        </a>
      </s.StoreLogoContainer>
    </s.StoreButtonsContainer>
  );
};

export const ReviewsStoreButtons = styled(StoreButtons)`
  @media (max-width: 800px) {
    display: none;
  }
`;

export { StoreButtons };
