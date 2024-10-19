import { StyleSheet, Text, View } from 'react-native'

import colors from '../../constants/colors'

const Title = ({ children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontFamily: 'open-sans-bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    },
})

export default Title
