import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
    return (
        <LinearGradient
            style={styles.rootScreen}
            colors={['#4e0329', '#ddb52f']}
        >
            <StartGameScreen />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: '#ddb52f',
    },
})