import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    marginTop: 80,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
});

type CategoryIconProps = {
  size: number;
  color: string;
};

const categories = [
  {
    name: "Entire Home",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="home" size={size} color={color} />
    ),
  },
  {
    name: "Private Room",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialIcons name="hotel" size={size} color={color} />
    ),
  },
  {
    name: "Shared Room",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="bed" size={size} color={color} />
    ),
  },
  {
    name: "Cabin",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialIcons name="cabin" size={size} color={color} />
    ),
  },
  {
    name: "Apartment",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="building" size={size} color={color} />
    ),
  },
  {
    name: "Luxury Stay",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialIcons name="star" size={size} color={color} />
    ),
  },
  {
    name: "Bed & Breakfast",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="coffee" size={size} color={color} />
    ),
  },
  {
    name: "Beachfront",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialCommunityIcons name="beach" size={size} color={color} />
    ),
  },
  {
    name: "Camping",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome5 name="campground" size={size} color={color} />
    ),
  },
  {
    name: "Glamping",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="globe" size={size} color={color} />
    ),
  },
  {
    name: "Farmhouse",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome5 name="tractor" size={size} color={color} />
    ),
  },
  {
    name: "Tiny House",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="home" size={size} color={color} />
    ),
  },
  {
    name: "Treehouse",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialCommunityIcons name="tree" size={size} color={color} />
    ),
  },
  {
    name: "Villas",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialIcons name="villa" size={size} color={color} />
    ),
  },
  {
    name: "Nature Getaway",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="leaf" size={size} color={color} />
    ),
  },
  {
    name: "City Skyline",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialIcons name="location-city" size={size} color={color} />
    ),
  },
  {
    name: "Poolside Stay",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialCommunityIcons name="pool" size={size} color={color} />
    ),
  },
  {
    name: "Boat House",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="ship" size={size} color={color} />
    ),
  },
  {
    name: "Castle",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="fort-awesome" size={size} color={color} />
    ),
  },
  {
    name: "Mansion",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialIcons name="domain" size={size} color={color} />
    ),
  },
  {
    name: "Historical Home",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="history" size={size} color={color} />
    ),
  },
  {
    name: "Desert Escape",
    icon: ({ size, color }: CategoryIconProps) => (
      <Ionicons name="sunny-sharp" size={size} color={color} />
    ),
  },
  {
    name: "Mountain Retreat",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome5 name="mountain" size={size} color={color} />
    ),
  },
  {
    name: "Eco-Friendly",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialCommunityIcons name="nature-people" size={size} color={color} />
    ),
  },
  {
    name: "Chalet",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome5 name="snowflake" size={size} color={color} />
    ),
  },
  {
    name: "Loft",
    icon: ({ size, color }: CategoryIconProps) => (
      <FontAwesome name="building" size={size} color={color} />
    ),
  },
  {
    name: "Ranch",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialCommunityIcons name="cow" size={size} color={color} />
    ),
  },
  {
    name: "Houseboat",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialCommunityIcons name="water" size={size} color={color} />
    ),
  },
  {
    name: "Studio",
    icon: ({ size, color }: CategoryIconProps) => (
      <MaterialIcons name="room" size={size} color={color} />
    ),
  },
];

const HorizontalMenu = () => {
  return (
    <View style={styles.scrollView}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 8,
        }}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 80,
              height: 80,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center'
            }}
          >
            {item.icon({ size: 30, color: "#000" })}
            <Text
              style={{
                fontFamily: "mon",
                fontSize: 12,
                marginTop: 2,
                textAlign: "center",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalMenu;
