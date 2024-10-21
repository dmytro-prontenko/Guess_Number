import React, { useCallback, useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/ui/Card'
import InstructionsText from '../components/ui/InstructionsText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = ({ userNumber, onGameOver, numberOfRounds }) => {
    const [minBound, setMinBound] = useState(1)
    const [maxBound, setMaxBound] = useState(100)
    const [currentGuess, setCurrentGuess] = useState(() =>
        generateRandomBetween(1, 100, userNumber)
    )
    const [guessRounds, setGuessRounds] = useState(1)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
            numberOfRounds(guessRounds)
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = useCallback(
        (direction) => {
            if (
                (direction === 'lower' && currentGuess < userNumber) ||
                (direction === 'higher' && currentGuess > userNumber)
            ) {
                Alert.alert(
                    'Хм..',
                    'Схоже на шахрайство... Здається ти мене хочеш обдурити',
                    [{ text: 'Вибач', style: 'cancel' }]
                )
                return
            }

            if (direction === 'higher') {
                setMinBound(currentGuess + 1)
            } else {
                setMaxBound(currentGuess)
            }

            const nextGuess = generateRandomBetween(
                direction === 'higher' ? currentGuess + 1 : minBound,
                direction === 'lower' ? currentGuess : maxBound,
                currentGuess
            )
            setCurrentGuess(nextGuess)
            setGuessRounds((prevRounds) => prevRounds + 1)
        },
        [currentGuess, userNumber, minBound, maxBound]
    )

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionsText style={styles.instructionText}>
                    Higher or lower
                </InstructionsText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('lower')}
                        >
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('higher')}
                        >
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 48,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
})

export default GameScreen
