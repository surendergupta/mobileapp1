import { glassTheme } from "@/theme/glass";
import { useTheme } from "@/theme/useTheme";
import { Text, TextProps } from "react-native";

export function GlassText(props: TextProps) {
  const { resolvedMode } = useTheme();
  const theme = glassTheme[resolvedMode];

  return <Text {...props} style={[{ color: theme.text }, props.style]} />;
}
