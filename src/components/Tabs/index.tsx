import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native'; 
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Tabs = () => {
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

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                renderItem={renderTabItem}/>
        </View>
    );
}

export default Tabs;