import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const Welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper bg="#fff">
      {/* <StatusBar style="dark" /> */}
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>MeetUp!</Text>
          <Text style={styles.punchLine}>
            Meet new people and tell a story with your every image and post
          </Text>
        </View>

        <View style={styles.footer}>
          <Button 
            title="Getting Started"
            buttonStyle={{marginHorizontal: wp(3)}}
            onPress={() => router.push("/signUp")}
          />
          <View style={styles.bottomTextContainer}>
              <Text style={styles.loginText}>Already have an account!</Text>
              <Pressable onPress={() => router.push("/login")}>
                <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: "bold"}]}>Login</Text>
              </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: "800"
  },
  punchLine: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text
  },
  footer: {
    gap: 30,
    width: '100%'
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
});