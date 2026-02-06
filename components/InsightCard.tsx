import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import GlassCard from "./GlassCard";

export default function InsightCard({ text }: { text: string }) {
  return (
    <GlassCard className="mt-4">
      <View className="flex-row items-center mb-2">
        <MaterialIcons name="psychology" size={18} color="#EF937B" />
        <Text className="ml-1.5 text-sm font-medium text-[#565656]">
          AI Health Insight
        </Text>
      </View>

      <Text className="text-sm text-black leading-5">{text}</Text>
    </GlassCard>
  );
}
