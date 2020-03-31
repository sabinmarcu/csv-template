import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Input,
} from '@material-ui/core';

import { TemplateContext } from '../hooks/useTemplate';

export const TemplateComponent = () => {
  const { template, handler } = useContext(TemplateContext);
  return (
    <Card>
      <CardHeader title={'Template'} />
      <CardContent>
        <Input 
          fullWidth
          multiline
          value={template}
          onChange={handler}
        />
      </CardContent>
    </Card>
  )
}

export default TemplateComponent;