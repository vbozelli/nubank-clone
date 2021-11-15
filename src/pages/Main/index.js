import React from 'react';
import styles from "./styles"
import { View } from 'react-native';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Card from '~/components/Card';

export default function Main() {
  return (
    <View style={styles.container}>
      <Header/>
      <Card/>
      <Tabs/>
    </View>
  )
}