import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import RecordRow from "./RecordRow";

export default function ClinicalRecordsCard() {
  return (
    <View className="mt-4">
      <Text className="text-sm font-medium text-[#565656] mb-2">
        Clinical Records
      </Text>

      <View className="rounded-3xl overflow-hidden">
        <BlurView intensity={30} tint="light">
          <LinearGradient
            colors={["rgba(255,255,255,0.6)", "rgba(254,209,198,0.6)"]}
            className="p-4"
          >
            <RecordRow
              icon="science"
              iconBgColor="#FFE9E3"
              iconTextColor="#EF937B"
              title="Hematology Panel"
              subtitle="Hemoglobin"
              msg="Platelets"
              rightTop="Yesterday"
              rightMiddle="10.8 g/dL (Low)"
              rightBottom="240 x10⁹/L"
            />

            <RecordRow
              icon="calendar-today"
              iconBgColor="#F2FAFF"
              iconTextColor="#7ABBE3"
              title="Glucose Tolerance Test"
              subtitle="Jan 28, 09:00 AM"
              msg="Dr. Chen"
              rightTop="Upcoming"
              rightMiddle=""
              rightBottom=""
            />
          </LinearGradient>
        </BlurView>
      </View>
    </View>
  );
}
