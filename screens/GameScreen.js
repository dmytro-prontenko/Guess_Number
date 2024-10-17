import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <View>
                <Text>Higher or lower</Text>
            </View>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 48,
    },
})

export default GameScreen
