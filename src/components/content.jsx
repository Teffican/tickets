import React from 'react';
import styled from 'styled-components'
import Sidebar from './sidebar';
import Tickets from './tickets/tickets';


const Content = () => {
  return (
    <ContentWrap>
      <Sidebar />
      <Tickets />
    </ContentWrap>
  );
};

export default Content;

const ContentWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 50px;
  @media (max-width: 680px) {
    flex-wrap: wrap;
  }
`
