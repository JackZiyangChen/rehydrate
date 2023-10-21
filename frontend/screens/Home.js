import react, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'


export default function Home({ navigation, route }) {

    const MAX_HEIGHT = 200;

    const [percent, setPercent] = useState(50)

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/bubble-background.png')}
                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
            >
                <View style={{
                    height: MAX_HEIGHT,
                    width: 50,
                    borderColor: 'black',
                    borderWidth: 1,
                    justifyContent: 'flex-end',
                }}>
                    <View style={
                        {
                            height: MAX_HEIGHT * percent / 100,
                            width: 50,
                            backgroundColor: 'red',
                        }
                    }>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
})