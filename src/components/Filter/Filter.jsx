import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => {
    console.log('Typed value:', event.target.value);
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: '100%', maxWidth: 350 }}
    >
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        size="small"
        value={filter}
        onChange={onFilterChange}
        fullWidth
      />
    </Box>
  );
};
