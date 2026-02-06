import { Text, View } from "react-native";

function TabIcon({ focused, icon, title, iconTextColor }: any) {
  if (focused) {
    return (
      <View className="flex items-center justify-center w-[68px] h-[50px] rounded-full -mb-8 mrounded-3xl bg-[#f28e7f]">
        {icon}
        <Text className="text-white text-xs font-semibold mt-1">{title}</Text>
      </View>
    );
  }

  return (
    <View className="flex items-center justify-center w-[88px] min-h-[69px] -mb-8 rounded-3xl">
      {icon}
      <Text className={`text-[${iconTextColor}] text-xs font-semibold mt-1`}>
        {title}
      </Text>
    </View>
  );
}

export default TabIcon;
