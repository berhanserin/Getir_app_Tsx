import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from 'components/LoginPage';
import SplashScreen from 'components/SplashScreen';
import RegisterPage from 'components/RegisterPage';
import MainView from 'components/MainView/MainView';

const Stack = createNativeStackNavigator();

const MainStack = (props: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerTitleAlign: 'center',
          title: 'getir',
          headerTintColor: 'yellow',
          headerTitleStyle: {fontWeight: '800', fontSize: 35},
          headerShadowVisible: false,
          headerStyle: {backgroundColor: '#5056F1'},
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen
          name="MainPage"
          component={MainView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
