import React, { useState } from 'react';
import {
    View, Text, Button, StyleSheet, Image, Animated, ImageBackground, TouchableOpacity
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default function GamePage() {
    const MAX_HEIGHT = 200;
    const MAX_XP = 100;

    const [waterLevel, setWaterLevel] = useState(new Animated.Value(0.4 * MAX_HEIGHT));
    const [coins, setCoins] = useState(0);
    const [xp, setXp] = useState(0);

    const addWater = () => {
        Animated.timing(waterLevel, {
            toValue: Math.min(MAX_HEIGHT, waterLevel._value + 50),
            duration: 500,
            useNativeDriver: false,
        }).start();

        setCoins(coins + 1);
        setXp((xp + 10) % MAX_XP);
    };

    return (
        <ImageBackground
            source={require('../../assets/bubble-background.png')}
            style={styles.container}
        >
            <Text style={styles.titleText}>Your Water Economy</Text>
            <Text style={styles.promptText}>
                Stay hydrated and earn coins!
            </Text>

            <View style={styles.infoContainer}>
                <View style={styles.coinContainer}>
                    <Image source={require('../../assets/coin.png')} style={styles.icon} />
                    <Text style={styles.coinText}>
                        {coins}
                    </Text>
                </View>
                <View style={styles.xpContainer}>
                    <Text style={styles.xpText}>XP</Text>
                    <ProgressBar progress={xp / MAX_XP} width={150} color="blue" />
                </View>
            </View>

            <View style={styles.bottleContainer}>
                <Animated.View style={{ ...styles.innerWater, height: waterLevel }}></Animated.View>
                <Image
                    source={require('../../assets/bottle.png')}
                    style={styles.bottleImage}
                    resizeMode="contain"
                />
                <Text style={styles.percentageText}>
                    {(waterLevel._value / MAX_HEIGHT * 100).toFixed(0)}%
                </Text>
            </View>

            <TouchableOpacity style={styles.waterButton} onPress={addWater}>
                <Image source={require('../../assets/water-drop.png')} style={styles.waterIcon} />
                <Text style={styles.waterButtonText}>Drink Water</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shopButton} onPress={() => { /* Navigate to shop */ }}>
                <Text style={styles.shopButtonText}>Open Shop</Text>
            </TouchableOpacity>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    xpContainer: {
        alignItems: 'center',
    },
    xpText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bottleContainer: {
        width: 80,
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40,
        overflow: 'hidden',
    },
    bottleImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 80,
        height: 200,
    },
    innerWater: {
        width: '90%',
        backgroundColor: 'aqua',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: 2,
    },
    icon: {
        width: 24,
        height: 24,
    },
    waterButton: {
        flexDirection: 'row',
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    waterButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    waterIcon: {
        width: 20,
        height: 20,
    },
    shopButton: {
        backgroundColor: '#228B22',
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
    },
    shopButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    promptText: {
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    titleText: {
        fontSize: 32,
        fontWeight: '700',
        color: '#2C3E50',  // Dark blue-ish color
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        marginBottom: 15,
    },
    promptText: {
        fontStyle: 'italic',
        fontSize: 18,
        color: 'white',  // Medium blue color
        marginBottom: 25,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 5,
        textAlign: 'center',
    },
    percentageText: {
        position: 'absolute',
        top: '45%',
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 22,
        color: '#E74C3C',  // Red color for emphasis
        textShadowColor: 'rgba(255, 255, 255, 0.85)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    coinText: {
        fontSize: 26,
        fontWeight: '600',
        color: '#F39C12',  // Gold-ish color for coins
        marginLeft: 10,
    },
    xpText: {
        fontWeight: '600',
        fontSize: 20,
        color: '#8E44AD',  // Purple-ish color for XP
        marginBottom: 8,
    }
});

