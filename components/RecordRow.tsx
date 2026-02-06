import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type RecordRowProps = {
  title: string;
  subtitle: string;
  msg: string;
  rightTop: string;
  rightMiddle: string;
  rightBottom: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBgColor: string;
  iconTextColor: string;
};

export default function RecordRow({
  title,
  subtitle,
  msg,
  rightTop,
  rightMiddle,
  rightBottom,
  icon,
  iconBgColor,
  iconTextColor,
}: RecordRowProps) {
  return (
    <View className="py-3 border-b border-[#F5E6E4]">
      <View className="flex-row items-start justify-between">
        {/* Left */}
        <View className="flex-row items-start flex-1 mr-3">
          {/* Icon */}
          <View
            className="w-[30px] h-[30px] rounded-2xl items-center justify-center mr-3"
            style={{ backgroundColor: iconBgColor }}
          >
            <MaterialIcons name={icon} size={16} color={iconTextColor} />
          </View>

          {/* Text */}
          <View className="flex-1">
            <Text
              className="text-base font-medium text-black"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-xs text-black" numberOfLines={1}>
              {subtitle}
            </Text>
            <Text className="text-xs text-black" numberOfLines={1}>
              {msg}
            </Text>
          </View>
        </View>

        {/* Right */}
        <View className="items-end shrink-0">
          <Text className="text-xs text-[#565656]">{rightTop}</Text>

          {!!rightMiddle && (
            <Text className="text-xs text-[#2B201E]">{rightMiddle}</Text>
          )}

          {!!rightBottom && (
            <Text className="text-xs text-[#2B201E]">{rightBottom}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
