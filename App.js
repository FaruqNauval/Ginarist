import * as React from 'react';
import { Bookmark, Explore, Home, Profile } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name

            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === 'Explore') { iconName = focused ? 'compass' : 'compass-outline'; }
            else if (rn === 'Bookmark') { iconName = focused ? 'bookmark' : 'bookmark-outline'; }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          LabelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: `` }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}