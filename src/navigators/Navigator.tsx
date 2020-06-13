/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersType } from '@reducers/index';
import auth from '@react-native-firebase/auth';

import HostNavigator from './HostNavigator';
import ChefNavigator from './ChefNavigator';
import EmployeeNavigator from './EmployeeNavigator';
import StartScreen from '../containers/StartScreen';
import LoginScreen from '../containers/LoginScreen';
import SignupScreen from '../containers/SignupScreen';
import LoadingScreen from '../containers/LoadingScreen';
import IntroScreen from '../containers/IntroScreen';
import BlockedScreen from '../containers/BlockedScreen';

import actions from '@actions/index';
import { getUserInfo, getStatusAccount } from '../api';

const App = createStackNavigator();
const useTypedSelector: TypedUseSelectorHook<ReducersType> = useSelector;

const Navigator = () => {
  const dispatch = useDispatch();
  const { uid } = useTypedSelector((state) => state.user);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({});
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');

  async function onAuthStateChanged(user) {
    setUser(user);
    try {
      if (user.uid !== null) {
        const _user = await getUserInfo(user.uid);
        await dispatch(
          actions.setUserInfo({
            uid: user.uid,
            position: _user.position,
            restaurantID: _user.restaurantID,
          }),
        );
        setPosition(_user.position);
      }
    } catch (error) {
      console.log(error);
    }

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);
  useEffect(() => {
    getStatusAccount(uid, setStatus);
  }, [uid]);

  if (status === 'DISABLED') {
    return <BlockedScreen />;
  }
  if (initializing) {
    return (
      <NavigationContainer>
        <App.Navigator>
          <App.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
        </App.Navigator>
      </NavigationContainer>
    );
  }

  if (!user) {
    return (
      <NavigationContainer>
        <App.Navigator>
          <App.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <App.Screen
            name="StartScreen"
            component={StartScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <App.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <App.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </App.Navigator>
      </NavigationContainer>
    );
  }
  switch (position) {
    case 'HOST':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="HostNavigator"
              component={HostNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    case 'CHEF':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="ChefNavigator"
              component={ChefNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    case 'EMPLOYEE':
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="EmployeeNavigator"
              component={EmployeeNavigator}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
    default:
      return (
        <NavigationContainer>
          <App.Navigator>
            <App.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
          </App.Navigator>
        </NavigationContainer>
      );
  }
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
