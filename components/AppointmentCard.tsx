import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  doctor: string;
  specialty: string;
  time: string;
};

export default function AppointmentCard({ doctor, specialty, time }: Props) {
  return (
    <View className="mt-4">
      {/* Section title */}
      <Text className="mb-2 text-sm font-medium text-[#565656]">
        Your next appointment
      </Text>

      {/* Glass Card */}
      <View className="rounded-3xl overflow-hidden relative">
        <BlurView intensity={30} tint="light">
          <LinearGradient
            colors={["rgba(254,209,198,0.6)", "rgba(255,255,255,0.6)"]}
            className="p-4"
          >
            {/* Content */}
            <View className="pr-[150px]">
              <Text
                className="text-base font-medium text-black"
                numberOfLines={1}
              >
                {doctor}
              </Text>

              <Text className="text-xs font-light text-black" numberOfLines={1}>
                {specialty}
              </Text>

              <Text className="mt-1 text-xs text-black">{time}</Text>

              <Pressable className="mt-3 self-start rounded-3xl border-[0.5px] border-white bg-[#F7C7BA] px-4 py-2">
                <Text className="text-sm text-black">Add reminder</Text>
              </Pressable>
            </View>

            {/* Doctor Illustration */}
            <Image
              source={require("../assets/doctor.png")}
              className="absolute -right-3 -bottom-18 w-[250px] h-[180px]"
              resizeMode="cover"
            />
          </LinearGradient>
        </BlurView>
      </View>
    </View>
  );
}
