import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/StateSample';
import RCounter from './components/ReducerSample';
import { PParent } from './components/Parent';
import { CbParent } from './components/CallbackSample';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import UCParent from './components/UseContextSample';
import ImageUploader from './components/UseRefSample';
import IHParent from './components/ImperativeHandleSample';
import { Input } from './components/CustomeHookSample';
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
    <RCounter initialValue={0}/>
    <PParent />
    <CbParent />
    <UseMemoSample />
    <Clock />
    <UCParent />
    <ImageUploader />
    <IHParent />
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
