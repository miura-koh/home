import React from "react";
import {
  MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from "@material-ui/core/styles";
import styled, {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { Container } from "@material-ui/core";
import theme from "./theme";
import Top from "./pages/top";

const GlobalStyle = createGlobalStyle`
  body {
    background: #fefefe;
    height:100vh;
  }
`;

const StyledContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const App: React.FunctionComponent = () => {
  return (
    <MuiStylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContainer>
            <Top />
          </StyledContainer>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </MuiStylesProvider>
  );
};

export default App;
