import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Platform, View } from "react-native";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <View className={`rounded-3xl overflow-hidden ${className}`}>
      {/* Blur layer (iOS only) */}
      {Platform.OS === "ios" && (
        <BlurView intensity={22} tint="light" className="absolute inset-0" />
      )}

      {/* Gradient layer (both platforms) */}
      <LinearGradient
        colors={["rgba(255,255,255,0.68)", "rgba(251,221,234,0.68)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="p-4 rounded-3xl"
        style={{
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.4)",

          // iOS shadow
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,

          // Android shadow
          elevation: 3,
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );
}
