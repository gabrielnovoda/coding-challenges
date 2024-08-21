import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import NavHeader from "@/components/navigation/nav-header";
import { Colors } from "@/constants/Colors";

const Item = ({ text, onPress }: { text: string; onPress?: () => void }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderRadius: 16,
        backgroundColor: Colors.light.background,
        opacity: pressed ? 0.6 : 1,
      })}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: "black" }}>{text}</Text>

      <Ionicons name="chevron-forward" size={24} color="black" />
    </Pressable>
  );
};

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavHeader title="Home" />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          gap: 16,
          padding: 16,
        }}
      >
        <Item
          text="Challenge 1"
          onPress={() => router.navigate("/challenge-1")}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
