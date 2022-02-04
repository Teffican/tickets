import React from 'react';
import Content from "./components/content";
import styled from "styled-components";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeBtn from './components/theme-btn';

function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(true);

  const changeTheme = () => {
    setIsThemeDark(!isThemeDark)
  }

  const theme = createTheme({
    palette: {
      mode: isThemeDark ? 'dark' : 'light',
      background: {
        default:  isThemeDark ? '#121212' : '#f3f7fa'
      }
    },
    
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Container>
          <ThemeBtn changeTheme={changeTheme} isThemeDark={isThemeDark}/>
          <Content />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  width: 100vw;
`
