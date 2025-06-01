import { Stack } from "expo-router";
import React from "react";

const drawerLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default drawerLayout;
