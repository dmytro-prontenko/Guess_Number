import { Alert, StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import colors from '../constants/colors'

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredValue, setEnteredValue] = useState('')

    const handleEnteredValue = (enteredText) => {
        setEnteredValue(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredValue('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Error', 'Please enter a number between 1 and 99', [
                {
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler,
                },
            ])
            return
        }
        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                inputMode={'numeric'}
                keyboardType={'number-pad'}
                value={enteredValue}
                onChangeText={handleEnteredValue}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>
                        Reset
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
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
    numberInput: {
        height: 50,
        width: 60,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: colors.yellow,
        color: colors.yellow,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
})
