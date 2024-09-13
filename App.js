import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ProfileContext } from "./Context";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <ProfileContext>
        <StripeProvider publishableKey="pk_test_51PZ8JwRrXggB3YOxlIady1diahANuhWtg6c8ylzX4WwsaXUbcOKQJHNwpLBTTXj176HBgv4VgU0snNNGr6BJwmAQ00znazHYfx">
          <StackNavigator />
          <StatusBar style="light" />
        </StripeProvider>
      </ProfileContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
