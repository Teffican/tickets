import React from 'react';
import styled from 'styled-components';

const TicketsInfoLine = () => {
  return (
    <InfoLine>
        <InfoItem>
          <InfoTitle>MOW - HKT</InfoTitle>
          <InfoSubitle>12:00 - 18:00</InfoSubitle>
        </InfoItem>

        <InfoItem>
          <InfoTitle>В пути</InfoTitle>
          <InfoSubitle>6 часов</InfoSubitle>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Пересадки</InfoTitle>
          <InfoSubitle>IST KHG</InfoSubitle>
        </InfoItem>
      </InfoLine>
  );
};

export default TicketsInfoLine;

const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`

const InfoItem = styled.div`
  margin-right: 15px;
  font-weight: 600;
  @media (max-width: 370px) {
    font-size: 14px;
    margin-right: 5px;
  }
`

const InfoTitle = styled.div`
  color: #a0b0b9;
`

const InfoSubitle = styled.div``
