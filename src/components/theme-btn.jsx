import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { Fab } from '@mui/material';
import styled from "styled-components";

const ThemeBtn = ({changeTheme, isThemeDark}) => {
  return (
    <ThemeBtnWrap>
        <Fab color="primary" onClick={changeTheme}>
        {isThemeDark ? <WbSunnyIcon /> : <Brightness3Icon />}
        </Fab>
    </ThemeBtnWrap>
  );
};

export default ThemeBtn;

const ThemeBtnWrap = styled.div`
  width: 56px;
  margin: 75px auto;
` 
