import { StyleSheet, Text, View } from 'react-native'

const GameOverScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>gameOverScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 48,
    },
})

export default GameOverScreen
