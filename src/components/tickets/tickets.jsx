import React from 'react';
import styled from 'styled-components';
import TicketsList from './list';
import TicketsSort from './sort';

const Tickets = () => {
  return (
    <TicketsWrap>
      <TicketsSort />
      <TicketsList />
    </TicketsWrap>
  );
};

export default Tickets;

const TicketsWrap = styled.div`
  width: 100%;
`
