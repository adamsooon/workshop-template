import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import PropTypes from 'prop-types';

function CustomSelect({values, header, value, handleChange}){

  const onChange = event => {
    handleChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{header}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        displayEmpty
        onChange={onChange}
      >
        {values.map( (row) => (
          <MenuItem value={row.key}>{row.value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
Select.propTypes = {
  values: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};
export default CustomSelect;
