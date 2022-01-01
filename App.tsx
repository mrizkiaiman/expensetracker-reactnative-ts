import React, {useState, useEffect} from 'react'
import AppLoading from 'expo-app-loading'
import {NavigationContainer} from '@react-navigation/native'
import {QueryClient, QueryClientProvider} from 'react-query'
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
import Toast from 'react-native-toast-message'
import {MenuProvider} from 'react-native-popup-menu'

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

  const queryClient = new QueryClient()

  const [user, setUser] = useState('')
  const [isReady, setIsReady] = useState(false)
  const restoreUser = async () => {}

  if (!isReady || !fontsLoaded)
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn} />
  else
    return (
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MenuProvider>
            {user ? <AppNavigator /> : <AppNavigator />}
            <Toast />
          </MenuProvider>
        </QueryClientProvider>
      </NavigationContainer>
    )
}
