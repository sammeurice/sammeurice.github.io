import React from "react";
import { NavBar } from "../components/NavBar";
import * as s from "../components/StyledComponents";
import background from "../assets/splash2.jpg";
import screenshot from "../assets/rankdScreenshot.webp";
import { FiUsers, FiUserCheck, FiCalendar, FiSliders } from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { StoreButtons, ReviewsStoreButtons } from "../components/StoreButtons";
import { UserWholeReview } from "../components/Review";
import EmailContactForm from "../components/EmailContactForm";
import RankdLogo from "../assets/rankdLogo.webp";
import ContactImg from "../assets/review1.jpg";

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
          <div
            className="header__container"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "100%",
              marginTop: "30vh",
            }}
          >
            <p
              className="header__subtitle"
              style={{
                color: "powderblue",
                textAlign: "center",
                maxWidth: "80%",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              Conveniently play matches at a Tennis Court near you!
            </p>
            <h1
              className="header__title"
              style={{
                color: "white",
                textAlign: "center",
                maxWidth: "80%",
                fontSize: "48px",
              }}
            >
              The fastest way to play tennis
            </h1>
          </div>
        </s.StyledRow>
      </s.SectionContainer>
      <s.SectionContainer className="memberships__container">
        <s.StyledRow
          className="memberships__row"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="memberships__info--container">
            <s.ReviewsTitle>Free Memberships</s.ReviewsTitle>
            <p>
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
                  <FiUserCheck size={80} />
                  <s.MembershipsInfoBlockTitle className="info--block__title">
                    1000+ MATCHES PLAYED
                  </s.MembershipsInfoBlockTitle>
                  <p className="info--block__para">
                    Over a thousand matches played using the app at ideal tennis
                    courts near both players.
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
              image={"../assets/review1.webp"}
              review={
                "Fun app! Was a good way to meet a new player around my skill level. A bit intimidating at first but I'm glad I went through"
              }
              name={"Alisa Hester"}
            />
            <UserWholeReview
              image={"../assets/review1.webp"}
              review={"Game changer. Found a partner in 5 minutes, amazing!"}
              name={"Rich Wilson"}
            />
            <UserWholeReview
              image={"../assets/review1.webp"}
              review={"By far the best way to find a tennis court near me!"}
              name={"Annie Stanley"}
            />
          </s.ReviewsContainer>
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
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </s.ContactSubTitle>
            <EmailContactForm />
          </s.ContactContainer>
        </s.StyledRow>
      </s.SectionContainer>
      <s.FooterContainer>
        <s.StyledRow>
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
        </s.StyledRow>
      </s.FooterContainer>
    </div>
  );
}

export default HomePage;
