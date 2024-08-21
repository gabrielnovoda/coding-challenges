import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

import NavHeader from "@/components/navigation/nav-header";

const Challenge1 = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavHeader title="Challenge 1" onPressBack={() => router.back()} />

      <View style={{ flex: 1 }}>{/* Write code here */}</View>
    </View>
  );
};

export default Challenge1;
