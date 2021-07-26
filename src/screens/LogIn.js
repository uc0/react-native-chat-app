import React from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'
import Image from '../components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background}
`
const LogIn = ({ navigation }) => {
    return (
        <Container>
            <Image/>
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </Container>
    )
}

export default LogIn