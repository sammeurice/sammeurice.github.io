import React from "react";
import RankdLogo from "../assets/rankdLogo.webp";
import { StoreButtons } from "./StoreButtons";
import * as s from "./StyledComponents";

class NavBar extends React.Component {
  render() {
    return (
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <s.RankdLogoContainer>
          <img src={RankdLogo} alt="Rankd Logo" style={{ width: "100% " }} />
        </s.RankdLogoContainer>
        <StoreButtons />
      </div>
    );
  }
}

export { NavBar };
