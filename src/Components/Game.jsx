import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

import arrowSvg from "../assets/play-button.png";

const media = generateMedia({
  xs: "250px",
  sm: "415px",
  md: "980px",
  lg: "1200px"
});

export default function Game(props) {
  const Container = styled.div`
    position: relative;
    height: 100px;
    border-top: 1px black solid;
    display: flex;
    margin: 5px;
    ${media.lessThan("md")`
        height: 70px;
    `}
  `;
  const LogoContainer = styled.div`
    width: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.lessThan("md")`
        width: 100px;
    `}
  `;
  const Logo = styled.img`
    width: 60px;
    object-fit: cover;
    ${media.lessThan("md")`
        width: 40px;
    `}
  `;
  const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    * {
      margin: 0 20px;
    }
    .textTeams {
      font-weight: 500;
    }
    ${media.lessThan("md")`
      *{
        margin: 0 5px;
      }
      .textLeage{
        display:none;
      }
    `}
  `;
  const InfoText = styled.div`
    ${media.lessThan("md")`
      
    `}
  `;
  const Arrow = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 25px;
    position: absolute;
    right: 150px;
    cursor: pointer;
    ${media.lessThan("md")`
      width: 30px;
      height: 30px;
      margin-top: 20px;
      right: 20px;
    `}
  `;
  const showIframe = link => {
    const iframeContainer = document.querySelector(".theIframeContainer");
    const iframe = document.querySelector(".theIframe");
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    iframeContainer.style.display = "block";
    iframe.src = link;
    // window.open(link, "theIframe");
  };
  return (
    <Container>
      <LogoContainer>
        <Logo src={props.teams[0].logo} />
        <Logo src={props.teams[1].logo} />
      </LogoContainer>
      <InfoContainer>
        <InfoText className='textTime'>{props.time}</InfoText>
        <InfoText className='textTeams'>{`${props.teams[0].name}-${props.teams[1].name}`}</InfoText>
        <InfoText className='textLeage'>{props.leage}</InfoText>
      </InfoContainer>
      <Arrow src={arrowSvg} onClick={() => showIframe(props.link)} />
    </Container>
  );
}
