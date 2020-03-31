import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Input,
} from '@material-ui/core';

import { ResultContext } from '../hooks/useResult';

export const ResultComponent = () => {
  const result = useContext(ResultContext);
  return (
    <Card>
      <CardHeader title={'Template'} />
      <CardContent>
        <Input 
          fullWidth
          disabled
          multiline
          value={result}
        />
      </CardContent>
    </Card>
  )
}

export default ResultComponent;