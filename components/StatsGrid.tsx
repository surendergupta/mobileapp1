import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <View className="mt-4 flex-row flex-wrap gap-4">
      {/* Resting HR */}
      <View className="w-[48%]">
        {/* Blur layer */}
        <BlurView intensity={20} tint="light" className="absolute inset-0" />
        <LinearGradient
          colors={["rgba(255,255,255,0.68)", "rgba(251,221,234,0.68)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="rounded-3xl overflow-hidden"
          style={{
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.4)",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <StatCard
            icon="favorite"
            iconBg="#FDE5EC"
            iconColor="#CE87A5"
            title="Resting HR"
            value="78 bpm"
            subtitle="Avg: 76"
            chartImage={require("@/assets/resting-hr.png")}
            accentBorder="#FFFFFF"
          />
        </LinearGradient>
      </View>

      {/* Blood Pressure */}
      <View className="w-[48%]">
        <LinearGradient
          colors={["rgba(255,255,255,0.68)", "rgba(210,255,251,0.68)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="rounded-3xl overflow-hidden"
          style={{
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.4)",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <StatCard
            icon="monitor-heart"
            iconBg="#C9EFEC"
            iconColor="#57B7AF"
            title="Blood Pressure"
            value="118/76 mmHg"
            subtitle="Optimal"
            chartImage={require("@/assets/bp.png")}
            accentBorder="#E5EEDD"
          />
        </LinearGradient>
      </View>

      {/* SpO₂ */}
      <View className="w-[48%]">
        <LinearGradient
          colors={["rgba(255,255,255,0.68)", "rgba(254,209,198,0.68)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="rounded-3xl overflow-hidden"
          style={{
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.4)",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <StatCard
            icon="bloodtype"
            iconBg="#FEE4DD"
            iconColor="#EF937B"
            title="SpO₂"
            value="99%"
            subtitle="Normal"
            chartImage={require("@/assets/spo2.png")}
            accentBorder="#F1D0CA"
          />
        </LinearGradient>
      </View>

      {/* Weight */}
      <View className="w-[48%]">
        <LinearGradient
          colors={["rgba(255,255,255,0.68)", "rgba(217,241,255,0.68)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="rounded-3xl overflow-hidden"
          style={{
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.4)",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <StatCard
            icon="monitor-weight"
            iconBg="#D3ECFB"
            iconColor="#7ABBE3"
            title="Weight Gain"
            value="+6.2 kg"
            subtitle="On track"
            chartImage={require("@/assets/wt-gain.png")}
            accentBorder="#E5EEDD"
          />
        </LinearGradient>
      </View>
    </View>
  );
}
