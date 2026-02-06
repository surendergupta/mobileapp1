import "./global.css";

import { Stack } from "expo-router";

import { ThemeProvider } from "@/theme/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </SafeAreaView>
  );
}
