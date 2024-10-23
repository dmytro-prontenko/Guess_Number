import { Dimensions, StyleSheet, Text, View } from 'react-native'

import colors from '../../constants/colors'

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.yellow,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 24 : 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        color: colors.yellow,
        fontWeight: 'bold',
        fontSize: deviceWidth < 380 ? 28 : 36,
    },
})

export default NumberContainer
