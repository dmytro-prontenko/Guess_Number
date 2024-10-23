import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from 'react-native'

import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import colors from '../constants/colors'

const GameOverScreen = ({ numberOfRounds, userNumber, onStartGame }) => {
    const { width, height } = useWindowDimensions()

    let imageSize = 300

    if (width < 380) {
        imageSize = 150
    }

    if (height < 500) {
        imageSize = 80
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={styles.screen}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
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
                <PrimaryButton onPress={onStartGame}>
                    Start New Game
                </PrimaryButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
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
