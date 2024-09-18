import Colors from "@/constants/Colors";
import defaultShadows from "@/constants/Shadow";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExploreHeader = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.actionRow}>
          <Link
            href={"/(modals)/booking"}
            asChild
            style={{ display: "flex", flex: 1, height: 65 }}
          >
            <TouchableOpacity>
              <View style={styles.searchButton}>
                <Ionicons name="search" size={24} />
                <View>
                  <Text style={{ fontFamily: "mon-sb" }}>Where to ?</Text>
                  <Text style={{ fontFamily: "mon" }}>Anywhere. any week </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter-outline" size={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
    height: 150,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  actionRow: {
    backgroundColor: "#ffffff",
    height: 80,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  filterButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  searchButton: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#000",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    ...defaultShadows.basicShadow,
  },
});

export default ExploreHeader;
