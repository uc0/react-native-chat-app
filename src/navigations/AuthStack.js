import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LogIn, SignUp } from '../screens'

const Stack = createStackNavigator()

const AuthStack = () => {
    const theme = useContext(ThemeContext)

    return (
        <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: theme.backgroundColor }
            }}
        >
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStack