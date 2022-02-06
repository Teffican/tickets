import React from 'react';
import styled from 'styled-components';

const TicketsInfoLine = ({origin, destination, date, stops, duration}) => {
  const currDate = new Date(date)
  const currDateHours = currDate.getHours()
  const currDateMins = currDate.getMinutes()
  const durationHours = Math.floor(duration / 60)
  const durationMins = duration % 60

  const getCorrectNum = (num) => num < 10 ? `0${num}` : num

  const getStops = () => {
    switch (stops.length) {
      case 1:
        return ' пересадка'
      case 2:
      case 3:
        return ' пересадки'
      default:
        return 'без пересадок'
    }
  }

  const getDestinationTime = () => {
    const mins = currDateMins + durationMins
    const newMins = mins >= 60 ? mins % 60 : mins

    const hours = currDateHours + durationHours + Math.floor(mins / 60)
    const newHours = hours >= 24 ? hours % 24 : hours

    return `${getCorrectNum(newHours)}:${getCorrectNum(newMins)}`
  }

  return (
    <InfoLine>
        <InfoItem>
          <InfoTitle>{origin} - {destination}</InfoTitle>
          <InfoSubitle>
          {getCorrectNum(currDateHours)}:{getCorrectNum(currDateMins)} 
          {' - '}
          {getDestinationTime()} 
          </InfoSubitle>
        </InfoItem>

        <InfoItem>
          <InfoTitle>В пути</InfoTitle>
          <InfoSubitle>
            {`${getCorrectNum(durationHours)}ч ${getCorrectNum(durationMins)}м`}
          </InfoSubitle>
        </InfoItem>

        <InfoItem>
          <InfoTitle>
            {stops.length ? stops.length : ''}
            {getStops()}
          </InfoTitle>
          <InfoSubitle>{stops.join(' ')}</InfoSubitle>
        </InfoItem>
      </InfoLine>
  );
};

export default TicketsInfoLine;

const InfoLine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 350px) {
    grid-template-columns: 1fr 60px 1fr;
  }
`

const InfoItem = styled.div`
  margin-top: 10px;
  font-weight: 600;
  @media (max-width: 450px) {
    font-size: 12px;
    margin-right: 5px;
  }
`

const InfoTitle = styled.div`
  color: #a0b0b9;
`

const InfoSubitle = styled.div``
