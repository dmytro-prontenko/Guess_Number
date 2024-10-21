import { Image, StyleSheet, Text, View } from 'react-native'

import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import colors from '../constants/colors'

const GameOverScreen = ({ numberOfRounds, userNumber, onStartGame }) => {
    return (
        <View style={styles.screen}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.webp')}
                />
            </View>

            <Text style={styles.summaryText}>
                Your phone needed{' '}
                <Text style={styles.highlightText}>{numberOfRounds}</Text>{' '}
                rounds to guess your number{' '}
                <Text style={styles.highlightText}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: colors.primary_darkest,
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 24,
    },
    highlightText: {
        fontFamily: 'open-sans-bold',
        color: colors.primary,
    },
})

export default GameOverScreen
