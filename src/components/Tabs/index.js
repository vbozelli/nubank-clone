import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';            

export default function Tabs() {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}>
                <TouchableOpacity>
                    <View style={styles.tabItem}>
                        <Icon name="person-add" size={24} color="#FFF"/>    
                        <Text style={styles.tabItemText}>Indicar amigos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tabItem}>
                        <Icon name="chat-bubble-outline" size={24} color="#FFF"/>    
                        <Text style={styles.tabItemText}>Cobrar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tabItem}>
                        <Icon name="arrow-downward" size={24} color="#FFF" type="MaterialIcons"/>    
                        <Text style={styles.tabItemText}>Depositar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tabItem}>
                        <Icon name="arrow-upward" size={24} color="#FFF" type="MaterialIcons"/>    
                        <Text style={styles.tabItemText}>Transferir</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tabItem}>
                        <Icon name="lock" size={24} color="#FFF" type="MaterialIcons"/>    
                        <Text style={styles.tabItemText}>Bloquear cartão</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}