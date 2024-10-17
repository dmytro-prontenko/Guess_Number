import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'

const Title = ({ children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.yellow,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.yellow,
        padding: 12,
    },
})

export default Title
