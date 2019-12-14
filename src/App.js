import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

import Games from "./Components/Games";
import getData from "./utils/getGames";
import Axios from "axios";

const media = generateMedia({
  xs: "250px",
  sm: "415px",
  md: "980px",
  lg: "1200px"
});

function App() {
  const [games, setGames] = useState([]);
  const [helloFunctions, setHelloFunctions] = useState("?");
  useEffect(() => {
    (async () => {
      setGames(await getData());
      const loading = document.querySelector("#loading");
      loading.style.display = "none";
    })();

    Axios.get("/.netlify/functions/sayHello")
      .then(res => {
        console.log(res.data);
        setHelloFunctions(res.data);
      })
      .catch(setHelloFunctions("LIVE NOW"));
  }, []);

  const Container = styled.div`
    width: 80vw;
    margin: auto;
    background-color: black;
    ${media.lessThan("md")`
      width:95vw;
    `}
  `;
  const InfoText = styled.div`
    font-size: 2rem;
    margin: 2vh auto;
    color: white;
    ${media.lessThan("md")`
      font-size:1rem;
    `}
  `;
  const Modal = styled.div`
    width: 100%;
    height: 1000vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #eeeeee;
    opacity: 0.8;
    z-index: 1;
    display: none;
  `;
  const IframeContainer = styled.div`
    width: 700px;
    height: 520px;
    background-color: white;
    overflow: hidden;
    display: none;
    position: fixed;
    top: 20vh;
    left: calc(50vw - 350px);
    z-index: 2;
    ${media.lessThan("md")`
      width: 300px;
      height: 410px;
      left: calc(50vw - 150px);
    `}
  `;
  const Iframe = styled.iframe`
    width: 1000px;
    height: 900px;
    margin-left: -32px;
    margin-top: -250px;
    ${media.lessThan("md")`
      width: 350px;
      height: 800px;
      margin-top: -370px;
      overflow-x:scroll;
    `}
  `;
  const hideModal = () => {
    const modal = document.querySelector(".modal");
    const iframeContainer = document.querySelector(".theIframeContainer");
    const iframe = document.querySelector(".theIframe");
    modal.style.display = "none";
    iframeContainer.style.display = "none";
    iframe.setAttribute("src", iframe.getAttribute("src"));
  };
  return (
    <Container>
      <InfoText>{helloFunctions}</InfoText>
      <Games games={games} />
      <Modal className="modal" onClick={() => hideModal()} />
      <IframeContainer className="theIframeContainer">
        <Iframe
          sandbox="allow-forms allow-same-origin allow-scripts"
          name="theIframe"
          className="theIframe"
          //scrolling={window.innerWidth > 980 ? "no" : "yes"}
          scrolling="yes"
          allowFullScreen="1"
          src=""
        ></Iframe>
      </IframeContainer>
    </Container>
  );
}

export default App;
