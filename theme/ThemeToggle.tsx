import type { GlassMode } from "@/theme/glass";
import { useTheme } from "@/theme/useTheme";
import { Pressable, Text } from "react-native";

const MODES: GlassMode[] = ["system", "light", "dark", "medical", "neon"];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  const nextMode = () => {
    const index = MODES.indexOf(mode);
    const next = MODES[(index + 1) % MODES.length];
    setMode(next);
  };

  return (
    <Pressable
      onPress={nextMode}
      className="p-4 rounded-xl bg-white/10 border border-white/20"
    >
      <Text className="text-[#363636] font-semibold text-center">
        Theme: {mode}
      </Text>
    </Pressable>
  );
}
