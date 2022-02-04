import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const TicketsSort = () => {
  const [currentSort, setCurrentSort] = React.useState('price');

  const handleClick = (e) => {
    setCurrentSort(e.target.value);
  }

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