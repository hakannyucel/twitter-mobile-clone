import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MessageScreen from "../screens/MessageScreen";
import Icons from '@expo/vector-icons/MaterialIcons';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (({focused}) => {
            let iconName: "home" | "search" | "notifications" | "message" = "home";

            if (route.name === "Home")
                iconName = 'home';
            else if (route.name === 'Search')
                iconName = 'search';
            else if (route.name === 'Notification')
                iconName = 'notifications';
            else if (route.name === 'Message')
                iconName = 'message';
           
            return <Icons name={iconName} size={24} color={focused ? "#4C9EEB" : "#687684"} style={styles.tabBar}/>
        })
    })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
}

const styles = {
  tabBar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
}