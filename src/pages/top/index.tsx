import React from "react";
import styled from "styled-components";

import Kurage from "../../assets/kurage.png";
import Names from "./Names";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;
const KurageImg = styled("img").attrs({ src: Kurage, alt: "" })`
  max-width: 120px;
  margin-right: ${(props) => props.theme.spacing(2)};
  border-radius: 1px;
`;

const Top: React.FunctionComponent = () => {
  return (
    <Container>
      <KurageImg />
      <Names />
    </Container>
  );
};
export default Top;
