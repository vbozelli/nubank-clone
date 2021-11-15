import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Main from './pages/Main';

const App = () => (
    <>
        <StatusBar barStyle="light-content" />
        <Main />
    </>
);

export default App;