import { useState } from 'react'
import {
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
    useWindowDimensions,
} from 'react-native'

import Card from '../components/ui/Card'
import InstructionsText from '../components/ui/InstructionsText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import colors from '../constants/colors'

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredValue, setEnteredValue] = useState('')
    const { height } = useWindowDimensions()

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

    const marginTopDistance = height < 480 ? 30 : 100

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <KeyboardAvoidingView behavior={'position'} style={styles.screen}>
                <View
                    style={[
                        styles.rootContainer,
                        { marginTop: marginTopDistance },
                    ]}
                >
                    <Title>Guess my number</Title>

                    <Card>
                        <InstructionsText>Enter your number</InstructionsText>
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
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        // flex: 1,
        alignItems: 'center',
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
