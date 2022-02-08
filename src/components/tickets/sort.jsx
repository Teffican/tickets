import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sortTickets } from '../../redux/tickets/actions';

const TicketsSort = () => {
  const [currentSort, setCurrentSort] = React.useState('price');
  const dispatch = useDispatch()
  const tickets = useSelector(state => state.tickets.currList)

  const handleClick = (e) => {
    setCurrentSort(e.target.value);
  }

  React.useEffect(() => {
    dispatch(sortTickets(currentSort))
  }, [currentSort, tickets.length]);
  
  return (
    <ButtonGroup variant="outlined" size='large' fullWidth>
        <Button onClick={handleClick} value='price' variant={currentSort === 'price' ? 'contained' : 'outlined'}>
          Самый дешёвый
        </Button>
        <Button onClick={handleClick} value='speed' variant={currentSort === 'speed' ? 'contained' : 'outlined'}>
          Самый быстрый
        </Button>
    </ButtonGroup>
  );
};

export default TicketsSort;