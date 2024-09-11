import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useWarmUpBrowser from "../hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

enum OAuthStrategyEnum {
  google =  "oauth_google",
  facebook = "oauth_facebook",
  apple = "oauth_apple"
}


type OAuthStrategy = `${OAuthStrategyEnum}`;

const Login = () => {
  useWarmUpBrowser();
  const router = useRouter();

  const { startOAuthFlow: startOAuthFlowApple } = useOAuth({
    strategy: "oauth_apple",
  });
  const { startOAuthFlow: startOAuthFlowGoogle } = useOAuth({
    strategy: "oauth_google",
  });
  const { startOAuthFlow: startOAuthFlowFacebook } = useOAuth({
    strategy: "oauth_facebook",
  });

  const onSelectAuth = async (stategey: OAuthStrategy) => {

    const selectedAuth = {
      [OAuthStrategyEnum.apple]: startOAuthFlowApple,
      [OAuthStrategyEnum.facebook]: startOAuthFlowFacebook,
      [OAuthStrategyEnum.google]: startOAuthFlowGoogle,
    }[stategey];

    try {
      const { createdSessionId, setActive } = await selectedAuth()
      if (createdSessionId) {
        setActive!({session: createdSessionId});
        router.back();
      }
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputFiled, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={[defaultStyles.btn]}>
        <Text style={defaultStyles.btnText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.seperator}>Or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
      <View style={{ gap: 20 }}>
        <TouchableOpacity style={[defaultStyles.btnOutLined]}>
          <Ionicons
            name="call-outline"
            size={24}
            style={[defaultStyles.btnIcon]}
          />
          <Text style={defaultStyles.btnOutlinedText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.btnOutLined]}
          onPress={() => onSelectAuth("oauth_apple")}
        >
          <Ionicons
            name="logo-apple"
            size={24}
            style={[defaultStyles.btnIcon]}
          />
          <Text style={defaultStyles.btnOutlinedText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.btnOutLined]}
          onPress={() => onSelectAuth("oauth_google")}
        >
          <Ionicons
            name="logo-google"
            size={24}
            style={[defaultStyles.btnIcon]}
          />
          <Text style={defaultStyles.btnOutlinedText}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.btnOutLined]}
          onPress={() => onSelectAuth("oauth_facebook")}
        >
          <Ionicons
            name="logo-facebook"
            size={24}
            style={[defaultStyles.btnIcon]}
          />
          <Text style={defaultStyles.btnOutlinedText}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  seperatorView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    gap: 30,
  },
  seperator: {
    fontFamily: "mon-sb",
  },
});

export default Login;
