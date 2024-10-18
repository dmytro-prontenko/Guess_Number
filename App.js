import { useCallback, useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'

import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import * as SplashScreen from 'expo-splash-screen'

import colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
    const [userNumber, setUserNumber] = useState()
    const [gameIsOver, setGameIsOver] = useState(false)

    const [fontsLoaded, fontError] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded && !fontError) {
        return null
    }

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }

    const gameIsOverHandler = () => {
        setGameIsOver(true)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if (userNumber) {
        screen = (
            <GameScreen
                userNumber={userNumber}
                onGameOver={gameIsOverHandler}
            />
        )
    }

    if (userNumber && gameIsOver) {
        screen = <GameOverScreen />
    }

    return (
        <LinearGradient
            style={styles.rootScreen}
            colors={[colors['primary_darkest'], colors.yellow]}
        >
            <ImageBackground
                source={require('./assets/images/background.webp')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
