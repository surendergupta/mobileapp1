import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export default function MedicineReminderCard({ title, subtitle }: Props) {
  return (
    <View className="mt-4">
      {/* Section title */}
      <Text className="text-sm font-medium text-[#565656] mb-2">
        Medicine Reminder
      </Text>

      {/* Glass Card */}
      <View className="rounded-3xl overflow-hidden">
        <BlurView intensity={14} tint="dark">
          <LinearGradient
            colors={["rgba(255,255,255,0.3)", "rgba(237,248,247,0.6)"]}
            className="p-4 flex-row items-center "
          >
            {/* Icon */}
            <View className="h-9 w-9 rounded-3xl bg-[#EDF8F7] items-center justify-center mr-5 overflow-hidden">
              <MaterialIcons name="medication" size={18} color="#57B7AF" />
            </View>

            {/* Text */}
            <View className="flex-1">
              <Text
                className="text-base font-medium text-black"
                numberOfLines={1}
              >
                {title}
              </Text>
              <Text className="text-sm text-black" numberOfLines={1}>
                {subtitle}
              </Text>
            </View>
          </LinearGradient>
        </BlurView>
      </View>
    </View>
  );
}
