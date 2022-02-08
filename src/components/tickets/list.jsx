import React from 'react';
import TicketsItem from './item';
import {fetchSearchId, fetchTickets} from '../../redux/tickets/actions'
import {useSelector, useDispatch} from 'react-redux'
import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const TicketsList = () => {
  const dispatch = useDispatch()
  const {searchId, currList: tickets, isLoaded} = useSelector(state => state.tickets)

  React.useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  React.useEffect(() => {
    if(searchId) dispatch(fetchTickets(searchId))
  }, [searchId])

  return (
    <>
      {
        isLoaded
        ? tickets.length
          ? tickets.slice(0, 5).map((ticket, index) => (
          <TicketsItem key={index} {...ticket}/>
          ))
          : <NoData>Tickets not found</NoData>
        : new Array(5).fill(0).map((_, index) => (
          <CardLoading key={index} variant="rectangular" height={202}/>
        ))
      }
    </>
  );
};

export default TicketsList;

const CardLoading = styled(Skeleton)`
  margin-top: 20px;
  border-radius: 5px;
`

const NoData = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`