import React from "react";
import styled from "styled-components";

import Game from "./Game";
export default function Games(props) {
  const Container = styled.div`
    width: 100%;
    background-color: #f6f6f6;
    border-radius: 5px;
  `;

  return (
    <Container>
      {props.games.map((game, index) => (
        <Game
          key={game.id}
          teams={game.teams}
          time={game.time}
          leage={game.leage}
          link={game.link}
        />
      ))}
    </Container>
  );
}
