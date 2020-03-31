import React, {
  useMemo,
  useContext,
  createContext,
} from 'react';

import { CSVContext } from './useCsv';
import { TemplateContext } from './useTemplate';

export const ResultContext = createContext('');

export const ResultProvider = ({ children }) => {
  const { lines } = useContext(CSVContext);
  const { template } = useContext(TemplateContext);

  const result = useMemo(
    () => lines
      .map(it => template.replace(/\$(\d+)/g, (m, idx) => it[parseInt(idx, 10) - 1]))
      .join('\n'),
    [lines, template]
  );
  return (
    <ResultContext.Provider value={result}>
      {children}
    </ResultContext.Provider>
  )
}
