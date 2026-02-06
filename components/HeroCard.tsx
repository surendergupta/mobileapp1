import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

type HeroCardProps = {
  name: string;
  title: string;
  highlight: string;
  updatedText: string;
  cta: string;
};

export default function HeroCard({
  name,
  title,
  highlight,
  updatedText,
  cta,
}: HeroCardProps) {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,0.68)", "rgba(254,209,198,0.68)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="mt-4 rounded-3xl border border-white p-4 overflow-hidden"
      style={{
        shadowColor: "#DFC7C3",
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View className="flex-row gap-4">
        {/* Text Section */}
        <View className="flex-1">
          <Text className="text-sm font-medium text-[#565656]">
            Good morning,{" "}
            <Text className="font-semibold text-[#EF937B]">{name}</Text>
          </Text>

          <Text className="mt-1 text-base leading-snug font-semibold text-black">
            {title}
            {"\n"}
            <Text className="text-[#EF937B]">{highlight}</Text>
          </Text>

          <Text className="mt-1 text-xs font-light text-[#565656]">
            {updatedText}
          </Text>

          <Pressable className="mt-3 self-start rounded-2xl border border-[#EF937B] px-4 py-2">
            <Text className="text-sm text-black">{cta}</Text>
          </Pressable>
        </View>

        {/* Illustration */}
        <View className="w-[120px] h-[120px] shrink-0 items-center justify-center">
          <Image
            source={require("../assets/baby.png")}
            className="w-[180px] h-[180px]"
            resizeMode="cover"
          />
        </View>
      </View>
    </LinearGradient>
  );
}
