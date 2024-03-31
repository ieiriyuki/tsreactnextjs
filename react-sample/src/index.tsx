import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/StateSample';
import rCounter from './components/ReducerSample';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter />
    {/* <rCounter /> error */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
