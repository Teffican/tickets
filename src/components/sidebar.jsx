import { Card, CardContent, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { filterTickets } from '../redux/tickets/actions';

const Sidebar = () => {
  const dispatch = useDispatch()
  const [checkboxAll, setCheckboxAll] = React.useState(true);
  const [checkboxes, setCheckboxes] = React.useState([
    {title: 'Без пересадок', isChecked: true, value: 0},
    {title: '1 пересадка', isChecked: true, value: 1},
    {title: '2 пересадки', isChecked: true, value: 2},
    {title: '3 пересадки', isChecked: true, value: 3},
  ]);

  const handleClick = (checkbox) => {
    let newCheckboxes = []

    if(checkbox.title === 'Все'){
      newCheckboxes = checkboxes.map(item => ({...item, isChecked: !checkboxAll}))
      setCheckboxAll(!checkboxAll)
    }else {
      newCheckboxes = checkboxes.map(item => (
        item.title === checkbox.title
          ? {...item, isChecked: !item.isChecked}
          : {...item}
      ))
    } 
    setCheckboxes(newCheckboxes)
  }

  React.useEffect(() => {
    const isAllChecked = checkboxes.every(item=>item.isChecked)
    setCheckboxAll(isAllChecked)

    const activeValues = checkboxes
      .filter(item => item.isChecked)
      .map(item => item.value)
    dispatch(filterTickets(activeValues))
  }, [checkboxes])

  return (
    <SidebarWrap>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Количество пересадок
        </Typography>
        <FormGroup>
          <FormControlLabel
            label='Все'
            control={
              <Checkbox 
              onClick={() => handleClick({title:'Все', isChecked: checkboxAll})} 
              checked={checkboxAll}
              />
            }
            />
          {checkboxes.map((checkbox, index) => (
            <FormControlLabel
            key={index}
            label={checkbox.title}
            control={
              <Checkbox 
              onClick={() => handleClick(checkbox)} 
              checked={checkbox.isChecked}
              />
            }
            />
          ))}
        </FormGroup>
      </CardContent>
    </SidebarWrap>
    );
};

export default Sidebar;

const SidebarWrap = styled(Card)`
  max-width: 275px;
  min-width: 195px;
  width: 100%;
  user-select: none;
  @media (max-width: 680px) {
    max-width: 100%;
  }
`
