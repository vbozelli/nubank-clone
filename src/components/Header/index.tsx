import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import logo from '../../assets/Nubank.png';

const Header = () =>  {
    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image source={logo}/>
                    <Text style={styles.title}>Victor</Text>
                </View>
                <Icon name="keyboard-arrow-down" size={20} color="#FFF"/>
            </View>
        </SafeAreaView>
    );
};

export default Header;