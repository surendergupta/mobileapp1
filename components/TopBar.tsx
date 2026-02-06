import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function TopBar() {
  return (
    <View className="px-4 py-3 flex-row items-center justify-between bg-[#FFF6F4]">
      {/* Logo / Title */}
      <Text className="text-[22px] font-semibold tracking-wide text-[#F28E7F]">
        HEALTH+
      </Text>

      {/* Right Actions */}
      <View className="flex-row items-center gap-3">
        {/* Notification Button */}
        <TouchableOpacity
          accessibilityLabel="Notifications"
          className="h-9 w-9 rounded-full bg-[#EF937B] items-center justify-center shadow"
          activeOpacity={0.8}
        >
          <MaterialIcons
            name="notifications-active"
            size={20}
            color="#ffffff"
          />
        </TouchableOpacity>

        {/* Avatar */}
        <View className="h-9 w-9 rounded-full bg-[#F1EAE8] overflow-hidden items-center justify-center shadow">
          <Image
            source={require("../assets/user.png")}
            className="h-9 w-9"
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}
