import { Card, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components'
import TicketsInfoLine from './info-line';

const TicketsItem = () => {
  return (
    <TicketWrap>
      <CardTop>
        <Price variant="h5">
          22 552 р.
        </Price>
        <Logo src="http://pics.avs.io/99/36/%7BS7%7D.png"/>
      </CardTop>
      <TicketsInfoLine />
      <TicketsInfoLine />
    </TicketWrap>
  );
};

export default TicketsItem;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`

const Price = styled(Typography)`
  color: #2196f3;
`

const Logo = styled.img``

const TicketWrap = styled(Card)`
  padding: 25px;
  margin-top: 20px;
  min-width: 345px;
  @media (max-width: 370px) {
    min-width: 290px;
  }
`
