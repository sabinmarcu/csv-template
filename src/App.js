import React from 'react';
import './App.css';

import { SeparatorProvider } from './hooks/useSeparator';
import { CSVProvider } from './hooks/useCsv';
import { TemplateProvider } from './hooks/useTemplate';
import { ResultProvider } from './hooks/useResult';

import SeparatorComponent from './components/Separator';
import InputComponent from './components/Input';
import ResultComponent from './components/Result';
import TemplateComponent from './components/Template';

export default () => (
  <SeparatorProvider>
    <CSVProvider>
      <TemplateProvider>
        <ResultProvider>
          <div className="App">
            <h1>App</h1>
            <SeparatorComponent />
            <div className="SideWrapper">
              <TemplateComponent />
            </div>
            <div className="SideWrapper full">
              <InputComponent />
              <ResultComponent />
            </div>
          </div>
        </ResultProvider>
      </TemplateProvider>
    </CSVProvider>
  </SeparatorProvider>
)
