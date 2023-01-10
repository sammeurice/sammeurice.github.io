import React from "react";
import { NavBar } from "../components/NavBar";
import * as s from "../components/StyledComponents";
import background from "../assets/splash2.jpg";
import screenshot from "../assets/rankdScreenshot.webp";
import { FiUsers, FiCalendar, FiSliders } from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { StoreButtons, ReviewsStoreButtons } from "../components/StoreButtons";
import { UserWholeReview } from "../components/Review";
import EmailContactForm from "../components/EmailContactForm";
import RankdLogo from "../assets/rankdLogo.webp";
import ContactImg from "../assets/contact.jpg";
import BgImage1 from "../assets/review1.jpg";
import BgImage2 from "../assets/review2.jpg";
import BgImage3 from "../assets/review3.jpg";
import Wreath from "../assets/wreath.svg";
import RacquetGuys from "../assets/racketguys.png";

function HomePage() {
  return (
    <div>
      <s.SectionContainer
        className="splash__container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <s.StyledRow className="splash__row">
          <NavBar />
          <s.SplashHeaderContainer>
            <s.SplashSubTitle>
              Conveniently play matches at a Tennis Court near you!
            </s.SplashSubTitle>
            <s.SplashTitle>The fastest way to play tennis</s.SplashTitle>
          </s.SplashHeaderContainer>
        </s.StyledRow>
      </s.SectionContainer>
      <s.SectionContainer className="memberships__container">
        <s.StyledRow
          className="memberships__row"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="memberships__info--container">
            <s.ReviewsTitle>Free Memberships</s.ReviewsTitle>
            <p style={{ color: "gray" }}>
              No admission or membership fees. Our goal is to become the most
              accessible tennis league.
            </p>
            <s.MembershipsInfoBlockContainer>
              <s.MembershipsInfoColumn>
                <s.MembershipsInfoBlock>
                  <FiUsers size={80} />
                  <s.MembershipsInfoBlockTitle className="info--block__title">
                    MATCHES MADE MINUTES AWAY
                  </s.MembershipsInfoBlockTitle>
                  <p className="info--block__para">
                    Our matchmaking system automatically determines the best
                    tennis court near you & your partner.
                  </p>
                </s.MembershipsInfoBlock>
                <s.MembershipsInfoBlock>
                  <MdOutlineVerifiedUser size={80} />
                  <s.MembershipsInfoBlockTitle className="info--block__title">
                    VERIFIED OPPONENTS
                  </s.MembershipsInfoBlockTitle>
                  <p className="info--block__para">
                    Opponents are verified through Amazon & Google face
                    detection.
                  </p>
                </s.MembershipsInfoBlock>
              </s.MembershipsInfoColumn>
              <s.MembershipsInfoColumn>
                <s.MembershipsInfoBlock>
                  <FiCalendar size={80} />
                  <s.MembershipsInfoBlockTitle className="info--block__title">
                    PLAY WHEN YOU WANT
                  </s.MembershipsInfoBlockTitle>
                  <p className="info--block__para">
                    Set the hours when you want to play & we'll find opponents
                    that fit your schedule.
                  </p>
                </s.MembershipsInfoBlock>
                <s.MembershipsInfoBlock>
                  <FiSliders size={80} />
                  <s.MembershipsInfoBlockTitle className="info--block__title">
                    CURATED SKILL LEVELS
                  </s.MembershipsInfoBlockTitle>
                  <p className="info--block__para">
                    Choose your opponent based on your current RANKD skill
                    level. Skill levels are adjusted after each competetive
                    match.
                  </p>
                </s.MembershipsInfoBlock>
              </s.MembershipsInfoColumn>
              <s.MembershipsScreenshotContainer>
                <img src={screenshot} alt="Screenshot" />
              </s.MembershipsScreenshotContainer>
            </s.MembershipsInfoBlockContainer>
          </div>
        </s.StyledRow>
      </s.SectionContainer>
      <s.SectionContainer>
        <s.StyledRow>
          <s.ReviewsHeaderContainer>
            <s.ReviewsTitle>Don't just take our word for it</s.ReviewsTitle>

            <ReviewsStoreButtons isReviews={true} />
          </s.ReviewsHeaderContainer>
          <s.ReviewsSubTitle>Hear from some of our users.</s.ReviewsSubTitle>
          <s.ReviewsContainer>
            <UserWholeReview
              image={BgImage1}
              review={
                "Very easy and reliable system to find tennis players around Toronto and the GTA"
              }
              name={"Pegasogmail"}
            />
            <UserWholeReview
              image={BgImage2}
              review={"Game changer. Found a partner in 5 minutes, amazing!"}
              name={"sam2000appstore"}
            />
            <UserWholeReview
              image={BgImage3}
              review={
                "Fun app. Was a good way to meet a new player around my skill level."
              }
              name={"mamastty"}
            />
          </s.ReviewsContainer>
        </s.StyledRow>
      </s.SectionContainer>
      <s.SectionContainer>
        <s.StyledRow>
          <s.ReviewsTitle>How We Rankd</s.ReviewsTitle>
          <s.ReviewsSubTitle>Milestones in 2022</s.ReviewsSubTitle>
          <s.MilestonesContentContainer>
            <s.Milestone>
              <s.MilestoneHeader>1000+</s.MilestoneHeader>
              <s.MilestonePara>Matches made per season</s.MilestonePara>
              <s.Wreath1 src={Wreath} />
            </s.Milestone>
            <s.Milestone>
              <s.MilestoneHeader>30+</s.MilestoneHeader>
              <s.MilestonePara>Cities across USA & Canada</s.MilestonePara>
              <s.Wreath2 src={Wreath} />
            </s.Milestone>
            <s.Milestone>
              <s.MilestoneHeader>Top 50</s.MilestoneHeader>
              <s.MilestonePara>Ranking in Apple App Store</s.MilestonePara>
              <s.Wreath3 src={Wreath} />
            </s.Milestone>
          </s.MilestonesContentContainer>
        </s.StyledRow>
      </s.SectionContainer>
      <s.SectionContainer>
        <s.StyledRow>
          <s.ContactContainer>
            <img
              style={{
                height: 80,
                width: 80,
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={ContactImg}
              alt="Our Team!"
            />
            <s.ContactTitle>Still have questions?</s.ContactTitle>
            <s.ContactSubTitle>
              Can't find the answer you're looking for? Please chat with our
              friendly team.
            </s.ContactSubTitle>
            <EmailContactForm />
          </s.ContactContainer>
        </s.StyledRow>
      </s.SectionContainer>
      <s.FooterContainer>
        <s.FooterRow>
          <s.FooterContent>
            <div className="rankdLogoContainer" style={{ width: 200 }}>
              <img
                src={RankdLogo}
                alt="Rankd Logo"
                style={{ width: "100% " }}
              />
            </div>
            <s.FooterTagline>Match.Meet.Play.</s.FooterTagline>
            <StoreButtons />
            <s.FooterTagline>Copyright © Rankd 2022</s.FooterTagline>
          </s.FooterContent>
          <s.FooterSponsorsContainer>
            <s.SponsorsTitle>Proud Partners of:</s.SponsorsTitle>
            <s.RacquetGuysLogo src={RacquetGuys} />
          </s.FooterSponsorsContainer>
        </s.FooterRow>
      </s.FooterContainer>
    </div>
  );
}

export default HomePage;
