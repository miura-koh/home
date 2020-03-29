import React from "react";
import { Typography, Link } from "@material-ui/core";
import styled from "styled-components";
import FacebookSVG from "../../assets/f_logo_RGB-Blue.svg";
import TwitterSVG from "../../assets/Twitter_Social_Icon_Circle_Color.svg";

const Container = styled("div")``;
const Name = styled(Typography).attrs({ variant: "h3" })``;
const Socials = styled("div")`
  display: flex;
  svg {
    width: 32px;
    height: 32px;
  }
  > :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(1)};
  }
`;

const Names: React.FunctionComponent = () => {
  return (
    <Container>
      <Name>Miura Kohei</Name>
      <Socials>
        <Link href="https://twitter.com/Warabimochi_jf" target="_blank">
          <TwitterSVG />
        </Link>
        <Link href="https://www.facebook.com/kohei.miu" target="_blank">
          <FacebookSVG />
        </Link>
      </Socials>
    </Container>
  );
};
export default Names;
