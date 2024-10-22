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
import { supabase } from "../uti/supabase";
import ScreenWrapper from "../components/ScreenWrapper";

const SignUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onsubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign Up", "Please fill all the fields");
      return;
    }
    let name = nameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    setLoading(true);

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
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
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formText}>
            Please fill in the details to create a new account
          </Text>
          <Input
            icon={<Icon name="user" size={26} color={theme.colors.textDark} />}
            placeholder="Enter your username"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            icon={<Icon name="mail" size={26} color={theme.colors.textDark} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            icon={<Icon name="lock" size={26} color={theme.colors.textDark} />}
            placeholder="Enter your password"
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
          />
          <Button title="Signup" loading={loading} onPress={onsubmit} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.navigate("/login")}>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.primaryDark, fontWeight: "600" },
              ]}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

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
