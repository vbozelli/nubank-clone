import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnimationProps }  from '../types/AnimationProps';
import styles from "./styles";

const Menu = (props: AnimationProps) => {
    const style = StyleSheet.create({
        container: {
            opacity: props.translationY.interpolate({
                inputRange: [0, 80],
                outputRange: [0, 1],
                extrapolate: "clamp"
            })
        }
    });

    return (
        <Animated.ScrollView style={style.container}>
            <View style={styles.qrCode}>
                <QRCode
                    backgroundColor="#8B10AE"
                    color="#FFF"
                    logoSize={80}
                    value="https://www.linkedin.com/in/victorbozellialvarez/?locale=en_US"/>
            </View>
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.navigationItem}>
                    <Icon name="help-outline" size={20} color="#FFF"/>
                    <Text style={styles.navigationItemText}>Me ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationItem}>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <Text style={styles.navigationItemText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationItem}>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <Text style={styles.navigationItemText}>Configurar cartão</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationItem}>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <Text style={styles.navigationItemText}>Configurações do app</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signoutButton}>
                <Text style={styles.signoutButtonText}>SAIR DO APP</Text>
            </TouchableOpacity>
        </Animated.ScrollView>
    );
};

export default Menu;