import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
			<EvilIcons name="search" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
	   <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "Wishlists",
          tabBarIcon: ({ color, size }) => (
			<EvilIcons name="heart" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
	   <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => (
			<FontAwesome5 name="airbnb" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
