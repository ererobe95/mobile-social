import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { theme } from "../constants/theme";
import Icon from "../components/Icon";
import { useRouter } from "expo-router";
import { hp, wp } from "../helpers/common";
import Input from "../components/Input";
import Button from "../components/Button";
import ScreenWrapper from "../components/ScreenWrapper";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onsubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all the fields");
      return;
    }
  };
  return (
    <ScreenWrapper>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          size={24}
          color={theme.colors.textDark}
          onPress={() => router.back()}
        />

        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formText}>Please log in to continue</Text>
          <Input
            icon={
              <Icon
                name="mail"
                size={26}
                color={theme.colors.textDark}
                onPress={() => router.back()}
              />
            }
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            icon={
              <Icon
                name="lock"
                size={26}
                color={theme.colors.textDark}
                onPress={() => router.back()}
              />
            }
            placeholder="Enter your password"
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
          />
          <Pressable>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </Pressable>
          <Button title="Login" loading={loading} onPress={onsubmit} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => router.navigate("/signUp")}>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.primaryDark, fontWeight: "600" },
              ]}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: "800",
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  formText: {
    color: theme.colors.text,
    fontSize: hp(1.5),
    fontWeight: "600",
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "600",
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
