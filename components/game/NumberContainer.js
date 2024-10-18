import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.yellow,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        color: colors.yellow,
        fontWeight: 'bold',
        fontSize: 36,
    },
})

export default NumberContainer
