import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import tw from "../lib/tailwind";

export default function RootLayout() {
  return (
    <SafeAreaView style={tw`flex-1 bg-base`}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
      </Stack>
    </SafeAreaView>
  );
}
