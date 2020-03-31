import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Input,
} from '@material-ui/core';

import useClipboard from 'react-use-clipboard';
import { ResultContext } from '../hooks/useResult';

export const ResultComponent = () => {
  const result = useContext(ResultContext);
  const [isCopied, setCopied] = useClipboard(result, { successDuration: 1000 });
  return (
    <Card>
      <CardHeader title={`Template ${isCopied ? `(Copied!)` : ''}`} />
      <CardContent onClick={setCopied}>
        <Input 
          fullWidth
          multiline
          value={result}
          onClick={setCopied}
        />
      </CardContent>
    </Card>
  )
}

export default ResultComponent;