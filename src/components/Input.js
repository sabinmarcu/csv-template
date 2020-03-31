import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Input,
} from '@material-ui/core';

import { CSVContext } from '../hooks/useCsv';

export const InputComponent = () => {
  const { csv, handler } = useContext(CSVContext);
  return (
    <Card>      
      <CardHeader title={'CSV Input'} />
      <CardContent>
        <Input 
          multiline
          fullWidth
          value={csv}
          onChange={handler}
        />
      </CardContent>
    </Card>
  )
}

export default InputComponent;