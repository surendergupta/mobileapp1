"use strict";

import { GlassCard } from "@/components/GlassCard";
import TopBar from "@/components/TopBar";
import { ThemeToggle } from "@/theme/ThemeToggle";
import { GlassText } from "@/utils/GlassText";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="w-full">
      <TopBar />
      <Text className="text-5xl font-bold text-blue-500 text-center">
        Welcome to Nativewind!
      </Text>
      <Text className="text-[#363636] text-2xl font-bold">
        NativeWind finally works 🎉
      </Text>
      <Text className="text-4xl font-bold text-cyan-400">Neon Glass UI</Text>
      <ThemeToggle />
      <GlassCard variant="card" className="mt-6">
        <GlassText className="text-lg font-semibold">
          <Text>System-synced glass ✨</Text>
        </GlassText>
      </GlassCard>
      <GlassCard variant="card" className="w-72">
        <GlassText className="text-lg font-semibold">
          <Text className="text-white">Heart Rate: 72 bpm</Text>
        </GlassText>
      </GlassCard>
      <GlassCard variant="modal" className="w-80">
        <GlassText className="text-lg font-semibold">
          <Text className="text-white">HIPAA Secure Modal</Text>
        </GlassText>
      </GlassCard>
    </View>
  );
}
