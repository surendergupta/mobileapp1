import { useTheme } from "@/theme/useTheme";
import { Pressable, Text } from "react-native";

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <Pressable
      onPress={() => setMode(mode === "system" ? "dark" : "system")}
      className="px-4 py-2 rounded-xl bg-white/10 border border-white/20"
    >
      <Text className="text-[#363636] font-semibold">
        {mode === "system" ? "dark" : "system"}
      </Text>
    </Pressable>
  );
}
