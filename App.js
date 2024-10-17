import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import colors from './constants/colors'

export default function App() {
    const [userNumber, setUserNumber] = useState()

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber)
    }
    return (
        <LinearGradient
            style={styles.rootScreen}
            colors={[colors.primary_dark, colors.yellow]}
        >
            <ImageBackground
                source={require('./assets/images/background.webp')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {userNumber ? (
                        <StartGameScreen onPickNumber={pickedNumberHandler} />
                    ) : (
                        <GameScreen />
                    )}
                </SafeAreaView>
            </ImageBackground>
            {/*<StatusBar style="auto" />*/}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
})
