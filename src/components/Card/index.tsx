import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { HandlerStateChangeEvent, PanGestureHandler, State, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnimationProps } from "../types/AnimationProps";
import styles from "./styles";

const Card = (props: AnimationProps) => {
    
    let offset = 0;

    const animatedEvent = Animated.event(
        [
          {
            nativeEvent: {
              translationY: props.translationY
            }
          }
        ],
        {
          useNativeDriver: true
        }
    );

    const style = StyleSheet.create(
        {
            containerStyle: {
                ...styles.container,
                transform: [
                    {
                        translateY: props.translationY.interpolate({
                            inputRange: [-350, 0, 380],
                            outputRange: [-50, 0, 432],
                            extrapolate: 'clamp'
                        })
                    }
                ]
            }
        }
    );

    const onHandlerStateChange = (event: HandlerStateChangeEvent) => {
        const nativeEvent = event.nativeEvent;

        if (nativeEvent.oldState == State.ACTIVE) {
            
            let opened = false;
            const translationY = nativeEvent.translationY as number;

            offset += translationY;
            
            if (translationY >= 100) {
                opened = true
            }
            else {
                props.translationY.setValue(offset);
                props.translationY.setOffset(0);
                offset = 0;
            }

            let toValue = 0;
            if (opened) {
                toValue = 380;
            }

            const animationCallback = () => {
                if (opened) {
                    offset = 380;
                }
                else {
                    offset = 0;
                }

                props.translationY.setOffset(offset);
                props.translationY.setValue(0);
            };

            Animated.timing(props.translationY, {
                duration: 200,
                toValue: toValue,
                useNativeDriver: true
            }).start(animationCallback);
        }
    };

    return (
        <PanGestureHandler maxPointers={1} onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange}>
            <Animated.View style={style.containerStyle}>
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
            </Animated.View>
        </PanGestureHandler>
    );
}

export default Card;