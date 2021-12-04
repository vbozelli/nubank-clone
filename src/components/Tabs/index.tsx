import React from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native'; 
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnimationProps }  from '../types/AnimationProps';
import styles from './styles';

const Tabs = (props: AnimationProps) => {
    type TabItem = {
        key: number,
        icon: string,
        text: string
    };

    const data: TabItem[] = [
        {
            key: 1,
            icon: "person-add",
            text: "Indicar amigos"
        },
        {
            key: 2,
            icon: "chat-bubble-outline",
            text: "Cobrar"
        },
        {
            key: 3,
            icon: "arrow-downward",
            text: "Depositar"
        },
        {
            key: 4,
            icon: "arrow-upward",
            text: "Transferir"
        },
        {
            key: 5,
            icon: "lock",
            text: "Bloquear cartão"
        }
    ];

    const renderTabItem = ({item, index, separators}) => {
        return (
            <TouchableOpacity
                key={item.key}
                style={styles.tabItem}>
                <Icon name={item.icon} size={24} color="#FFF"/>    
                <Text style={styles.tabItemText}>{item.text}</Text>
            </TouchableOpacity>
        );
    };

    const style = StyleSheet.create({
        container: {
            ...styles.container,
            opacity: props.translationY.interpolate({
                inputRange: [0, 80],
                outputRange: [1, 0.3],
                extrapolate: "clamp"
            })
        }
    });

    return (
        <Animated.View style={style.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                renderItem={renderTabItem}/>
        </Animated.View>
    );
}

export default Tabs;