import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Main from './pages/Main';

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <>
            <StatusBar barStyle="light-content" />
            <Main />
        </>
    );
};

export default App;