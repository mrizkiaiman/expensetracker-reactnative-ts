import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AppLoading from 'expo-app-loading'
import {NavigationContainer} from '@react-navigation/native'
import {
  useFonts,
  Oxanium_200ExtraLight,
  Oxanium_300Light,
  Oxanium_400Regular,
  Oxanium_500Medium,
  Oxanium_600SemiBold,
  Oxanium_700Bold,
  Oxanium_800ExtraBold,
} from '@expo-google-fonts/oxanium'
import {
  Prompt_200ExtraLight,
  Prompt_300Light,
  Prompt_400Regular,
  Prompt_500Medium,
  Prompt_600SemiBold,
  Prompt_700Bold,
  Prompt_800ExtraBold,
} from '@expo-google-fonts/prompt'

import AppNavigator from '@navigation/app-navigator'
import AuthNavigator from '@navigation/auth-navigator'

export default function App() {
  let [fontsLoaded] = useFonts({
    Oxanium_200ExtraLight,
    Oxanium_300Light,
    Oxanium_400Regular,
    Oxanium_500Medium,
    Oxanium_600SemiBold,
    Oxanium_700Bold,
    Oxanium_800ExtraBold,
    Prompt_200ExtraLight,
    Prompt_300Light,
    Prompt_400Regular,
    Prompt_500Medium,
    Prompt_600SemiBold,
    Prompt_700Bold,
    Prompt_800ExtraBold,
  })

  if (!fontsLoaded)
    return (
      <AppLoading />
    )
  else return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
