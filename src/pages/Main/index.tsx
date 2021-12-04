import React from 'react';
import styles from "./styles"
import { Animated, View } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

const Main = () => {
  const translateY = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <Card translationY={translateY}/>
        <Menu translationY={translateY}/>
      </View>
      <Tabs translationY={translateY}/>
    </View>
  )
};

export default Main;