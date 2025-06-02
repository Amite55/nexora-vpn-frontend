import { ImgSplash } from "@/assets/image";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../lib/tailwind";

const Onboarding = () => {
  const [checkValue, setCheckedValue] = React.useState(false);
  return (
    <SafeAreaView style={tw`flex-1 bg-base`}>
      <View style={tw`flex-1 justify-between items-center`}>
        <View>{/* Top content */}</View>

        <View style={tw`items-center`}>
          <Image style={tw`w-28 h-28 mb-4`} source={ImgSplash} />
          <Text style={tw`text-2xl font-Exo2ExtraBold text-white`}>
            Nexora-<Text style={tw`text-primary`}>VPN</Text>
          </Text>
        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
