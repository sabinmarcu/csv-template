import React, { useContext } from 'react';
import { 
  Card,
  CardContent,
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem
} from '@material-ui/core';
import { separators, SeparatorContext } from '../hooks/useSeparator';

export const SeparatorComponent = () => {
  const { separator, handler } = useContext(SeparatorContext);
  return (
    <Card>
      <CardContent>
        <FormControl fullWidth>
          <InputLabel id='separator'>Separator</InputLabel>
          <Select 
            labelId='separator'
            autoWidth
            value={separator}
            onChange={handler}
          >
            {Object.entries(separators)
              .map(([key, value]) => (
                <MenuItem key={key} value={value}>{key}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}

export default SeparatorComponent;
