import { Card, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components'
import TicketsInfoLine from './info-line';

const TicketsItem = ({price, carrier, segments}) => {
  const changeNumFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <TicketWrap>
      <CardTop>
        <Price variant="h5">
          {changeNumFormat(price)} Р
        </Price>
        <div></div>
        <Logo src={`//pics.avs.io/99/36/${carrier}.png`}/>
      </CardTop>
      <TicketsInfoLine {...segments[0]}/>
      <TicketsInfoLine {...segments[1]}/>
    </TicketWrap>
  );
};

export default TicketsItem;

const CardTop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 400px) {
    grid-template-columns: 3fr 1fr 3fr;
  }
`

const Price = styled(Typography)`
  color: #2196f3;
`

const Logo = styled.img``

const TicketWrap = styled(Card)`
  padding: 25px;
  margin-top: 20px;
  min-width: 440px;
  @media (max-width: 470px) {
    min-width: 290px;
  }
`
