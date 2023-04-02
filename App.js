import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import RegisterScreen from './components/Register';
import LoginScreen from './components/LoginScreen';
import InfoScreen from './components/InfoScreen'
import NewsScreen from './components/NewsScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person';
          } else if (route.name === 'Info') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'pink',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        }
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#00ffff',
            }
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

