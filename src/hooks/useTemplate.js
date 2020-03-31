import React, {
  useState,
  useCallback,
  createContext,
} from 'react';

export const TemplateContext = createContext({
  template: '',
  handler: () => {},
});

export const TemplateProvider = ({ children }) => {
  const [template, setTemplate] = useState('');
  const handler = useCallback(
    ({ target: { value }}) => setTemplate(value),
    [setTemplate],
  );
  return (
    <TemplateContext.Provider value={{ template, handler }}>
      {children}
    </TemplateContext.Provider>
  )
}

export default TemplateProvider;