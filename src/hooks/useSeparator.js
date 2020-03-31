import React, { useState, useCallback, createContext } from 'react';

export const separators = {
  'Tabs': '\t',
  'Commas': ',',
}

export const SeparatorContext = createContext({ 
  separator: separators.Tabs, 
  handler: () => {} 
});

export const SeparatorProvider = ({ children }) => {
  const [separator, setSeparator] = useState(separators.Tabs);
  const handler = useCallback(
    ({ target: { value }}) => setSeparator(value),
    [setSeparator]
  );
  return <SeparatorContext.Provider value={{ separator, handler }}>
    {children}
  </SeparatorContext.Provider>
}

export default SeparatorProvider;