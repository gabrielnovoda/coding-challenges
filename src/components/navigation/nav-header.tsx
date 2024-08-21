import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "@/constants/Colors";

const NavHeader = ({
  title,
  onPressBack,
}: {
  title: string;
  onPressBack?: () => void;
}) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: safeAreaInsets.top,
        backgroundColor: Colors.light.background,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 54,
          width: "100%",
        }}
      >
        {onPressBack ? (
          <Pressable
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onPressBack}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </Pressable>
        ) : null}

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
          <View />
        </View>

        {onPressBack ? <View style={{ width: 40 }} /> : null}
      </View>
    </View>
  );
};

export default NavHeader;
