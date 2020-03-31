import React, {
  useState,
  useMemo,
  useCallback,
  createContext,
  useContext,
} from 'react';
import {SeparatorContext} from './useSeparator'

export const CSVContext = createContext({
  lines: [],
  csv: '',
  handler: () => {},
});

export const CSVProvider = ({ children }) => {
  const { separator } = useContext(SeparatorContext);
  const [csv, setCSV] = useState('');
  const lines = useMemo(
    () => csv.split('\n')
      .filter(Boolean)
      .map(it => it.split(separator).map(it => it.trim())),
    [csv, separator]
  );
  const handler = useCallback(
    ({ target: { value }}) => setCSV(value),
    [setCSV],
  );
  return (
    <CSVContext.Provider value={{ csv, handler, lines }}>
      {children}
    </CSVContext.Provider>
  )
}

export default CSVProvider;