import { StyleSheet, Text, View } from 'react-native'

import colors from '../../constants/colors'

const InstructionsText = ({ children, style }) => {
    return (
        <View>
            <Text style={[styles.instructionText, style]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: colors.yellow,
        fontSize: 24,
    },
})

export default InstructionsText
