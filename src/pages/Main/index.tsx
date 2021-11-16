import React from 'react';
import styles from "./styles"
import { View } from 'react-native';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';
import Menu from '../../components/Menu';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <Menu/>
        <Card/>
      </View>
      <Tabs/>
    </View>
  )
};

export default Main;