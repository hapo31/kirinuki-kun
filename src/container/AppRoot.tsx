import React, { useCallback, useState } from "react";
import styled from "styled-components";
import useMouseDragging from "../hooks/useMouseDragging";

export default () => {
  const [playerX, setPlayerX] = useState(500);
  const onDragging = useCallback((x, y) => {
    console.log({ x });
    setPlayerX(x);
  }, []);
  const [parentProps] = useMouseDragging(onDragging);
  return (
    <Container>
      <PlayerContainer width={playerX}>
        <h1>hoge</h1>
      </PlayerContainer>
      <PlayerBorderContainer>
        <PlayerBorder {...parentProps} />
      </PlayerBorderContainer>
      <ControllerContainer>
        <h1>hoge</h1>
      </ControllerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const PlayerContainer = styled.div`
  width: ${({ width }: { width: number }) => width}px;
`;

const PlayerBorderContainer = styled.div`
  padding: 5px;
  height: 100vh;
  :hover {
    cursor: pointer;
  }
`;

const PlayerBorder = styled.div`
  height: 100vh;
  width: 1px;
  border-right: 2px ridge gray;
`;

const ControllerContainer = styled.div``;
