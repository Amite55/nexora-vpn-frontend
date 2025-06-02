import { ImgSplash } from "@/assets/image";
import * as Font from "expo-font";
import { router, SplashScreen } from "expo-router";
import React from "react";
import { ActivityIndicator, Image, View } from "react-native";
import tw from "../lib/tailwind";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  React.useEffect(() => {
    const AppLoader = async () => {
      await Font.loadAsync({
        Exo2Black: require("@/assets/fonts/Exo2-Black.ttf"),
        Exo2BlackItalic: require("@/assets/fonts/Exo2-BlackItalic.ttf"),
        Exo2Bold: require("@/assets/fonts/Exo2-Bold.ttf"),
        Exo2BoldItalic: require("@/assets/fonts/Exo2-BoldItalic.ttf"),
        Exo2ExtraBold: require("@/assets/fonts/Exo2-ExtraBold.ttf"),
        Exo2ExtraLightItalic: require("@/assets/fonts/Exo2-ExtraLightItalic.ttf"),
        Exo2Italic: require("@/assets/fonts/Exo2-Italic.ttf"),
        Exo2Light: require("@/assets/fonts/Exo2-Light.ttf"),
        Exo2LightItalic: require("@/assets/fonts/Exo2-LightItalic.ttf"),
        Exo2Medium: require("@/assets/fonts/Exo2-Medium.ttf"),
        Exo2MediumItalic: require("@/assets/fonts/Exo2-MediumItalic.ttf"),
        Exo2Regular: require("@/assets/fonts/Exo2-Regular.ttf"),
        Exo2SemiBold: require("@/assets/fonts/Exo2-SemiBold.ttf"),
        Exo2SemiBoldItalic: require("@/assets/fonts/Exo2-SemiBoldItalic.ttf"),
        Exo2Thin: require("@/assets/fonts/Exo2-Thin.ttf"),
        Exo2ThinItalic: require("@/assets/fonts/Exo2-ThinItalic.ttf"),
      });

      await SplashScreen.hideAsync();
    };
    AppLoader();

    setTimeout(() => {
      router.push("/onboarding");
    }, 500);
  }, []);

  return (
    <View style={tw`flex-1 bg-base`}>
      <View style={tw`flex-1 justify-center items-center gap-4`}>
        <Image source={ImgSplash} style={tw`h-28 w-28`} />
        <ActivityIndicator size={"large"} color={tw.color("green-500")} />
      </View>
    </View>
  );
}
