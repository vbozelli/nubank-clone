import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="attach-money" size={28} color="#666"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="visibility-off" size={28} color="#666"/>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.balanceTitle}>Saldo disponível</Text>
                <Text style={styles.balance}>R$ 0,00</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.transfer}>Transferência de R$ 0,01 recebida de Pablo Alvarez Bugallo</Text>
            </View>
        </View>
    );
};


export default Card;