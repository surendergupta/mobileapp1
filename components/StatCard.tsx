import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

interface StatCardProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  statBG?: string;
  iconBg: string;
  iconColor: string;
  title: string;
  value: string;
  subtitle: string;
  chartImage?: any;
  accentBorder?: string;
}

export default function StatCard({
  icon,
  statBG = "bg-white",
  iconBg,
  iconColor,
  title,
  value,
  subtitle,
  chartImage,
  accentBorder = "#F1EAE8",
}: StatCardProps) {
  return (
    <View
      className={`p-3 rounded-2xl ${statBG}`}
      style={{
        borderWidth: 1,
        borderColor: accentBorder,
      }}
    >
      {/* Header */}
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-center gap-2">
          <View
            className="h-[30px] w-[30px] rounded-2xl items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            <MaterialIcons name={icon} size={18} color={iconColor} />
          </View>

          <Text className="text-[12px] font-light text-[#565656]">{title}</Text>
        </View>
      </View>

      {/* Body */}
      <View className="mt-2 relative">
        <Text className="text-lg font-medium text-black">{value}</Text>

        <Image
          source={chartImage ?? require("@/assets/resting-hr.png")}
          resizeMode="contain"
          className="absolute w-full h-8 bottom-3 left-0"
        />

        <Text className="mt-2 text-[10px] text-[#565656]">{subtitle}</Text>
      </View>
    </View>
  );
}
