import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

type Item = {
  icon: keyof typeof MaterialIcons.glyphMap;
  text: string;
  tone: "primary" | "neutral";
};

export default function FocusCard({ items }: { items: Item[] }) {
  return (
    <View className="mt-4">
      {/* Title */}
      <Text className="text-sm font-medium text-[#565656]">Today’s Focus</Text>

      {/* Glass Card */}
      <View className="mt-2 rounded-3xl overflow-hidden">
        <BlurView intensity={30} tint="light">
          <LinearGradient
            colors={["rgba(255,255,255,0.6)", "rgba(254,209,198,0.6)"]}
            className="p-4"
          >
            {items.map((it, idx) => (
              <View
                key={idx}
                className="flex-row items-center py-1.5 border-b border-[#F5E6E4]"
              >
                {/* Icon */}
                <View className="w-4 h-4 items-center justify-center mr-4">
                  <MaterialIcons
                    name={it.icon}
                    size={14}
                    color={it.tone === "primary" ? "#EF937B" : "#CFCFCF"}
                  />
                </View>

                {/* Text */}
                <Text className="text-[12px] text-[#2B201E] flex-1">
                  {it.text}
                </Text>
              </View>
            ))}
          </LinearGradient>
        </BlurView>
      </View>
    </View>
  );
}
