import { StyleSheet, View } from 'react-native'

import colors from '../../constants/colors'

const Card = ({ children }) => {
    return <View style={styles.inputContainer}>{children}</View>
}

const styles = StyleSheet.create({
    inputContainer: {
        // marginTop: deviceWidth < 380 ? 12 : 18,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: colors.primary_darkest,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        //Налаштування тіні для Android
        elevation: 8,
        // Налаштування тіні для iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})

export default Card
