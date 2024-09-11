import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Profile = () => {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  return (
    <View>
      <Text>Profile</Text>
      {isSignedIn ? (
        <Button title="Sign out" onPress={() => signOut()} />
      ) : (
        <Link href={"/(modals)/login"}>
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default Profile;
