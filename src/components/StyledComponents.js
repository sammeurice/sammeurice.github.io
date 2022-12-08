import styled from "styled-components";

export const RankdLogoContainer = styled.div`
  width: 200px;
  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const StoreButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 850px) {
    ${(props) => props.isReviews && "display: none;"}
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StoreLogo = styled.img`
  width: 100%;
`;

export const AppStoreLogoContainer = styled.div`
  width: 150px;
  margin-right: 24px;
  @media (max-width: 700px) {
    margin-right: 0;
    margin-top: 16;
  }
  @media (max-width: 500px) {
    width: 120px;
  }
`;

export const StoreLogoContainer = styled.div`
  width: 150px;
  @media (max-width: 500px) {
    width: 120px;
  }
`;

export const SectionContainer = styled.section`
  padding: 32px 0;
  display: flex;
  flexdirection: "column";
  alignitems: "center";
  justifycontent: "flex-start";
  background-color: #f5f5f5;
  margin: 0 auto;
`;

export const StyledRow = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  @media (max-width: 700px) {
    padding: 0 16px;
`;

export const MembershipsInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 25%;
  & > *:only-child {
    margin: auto;
  }
  @media (max-width: 1100px) {
    width: calc(100% / 3);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const MembershipsInfoBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const MembershipsInfoBlock = styled.div`
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MembershipsInfoBlockTitle = styled.p`
  font-size: 18px;
  padding: 0;
  font-weight: bolder;
`;

export const MembershipsInfoBlockPara = styled.p`
  padding: 0;
  margin: 0;
`;

export const MembershipsScreenshotContainer = styled.div`
  width: 25%;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ReviewsHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewsTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

export const ReviewsSubTitle = styled.div`
  font-size: 16px;
  color: gray;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const User = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(${(props) => props.image});
  color: white;
  height: 500px;
  width: 33%;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const UserReview = styled.div`
  width: 80%;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px;
  margin-bottom: 16px;
`;

export const UserReviewName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
  padding: 0;
`;

export const UserReviewText = styled.p`
  font-size: 16px;
  line-height: 1.5em;
  margin: 0;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ContactTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const ContactSubTitle = styled.p`
  color: gray;
  font-size: 16px;
  text-align: center;
  margin: 0;
`;

// Email Contact Form

export const ContactFormLabel = styled.label`
  align-self: flex-start;
  font-weight: bold;
`;

// Footer

export const FooterContainer = styled.footer`
  padding: 32px 0;
  display: flex;
  flexdirection: "column";
  alignitems: "center";
  justifycontent: "flex-start";
  background-color: #242424;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterTagline = styled.p`
  text-align: center;
  color: gray;
`;
