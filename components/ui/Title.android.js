import { Platform, StyleSheet, Text, View } from 'react-native'

const TitleAndroid = ({ children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        margin: 24,
        fontFamily: 'open-sans-bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'ios' ? 2 : 0,
        borderWidth: Platform.select({
            android: 2,
            ios: 0,
        }),
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        minWidth: 300,
    },
})

export default TitleAndroid
