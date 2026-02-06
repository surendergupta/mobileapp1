import type { ColorValue } from "react-native";

export type GlassMode = "system" | "light" | "dark" | "medical" | "neon";

export type ResolvedGlassMode = "light" | "dark" | "medical" | "neon";

export type GlassVariant = "card" | "modal" | "header";

type GradientTuple = readonly [ColorValue, ColorValue, ...ColorValue[]];

interface GlassThemeToken {
  bg: string;
  border: string;
  text: string;
  glow: GradientTuple;
}

export const glassTokens = {
  card: {
    radius: 16,
    padding: 16,
    blur: 20,
  },
  modal: {
    radius: 24,
    padding: 24,
    blur: 30,
  },
  header: {
    radius: 0,
    padding: 20,
    blur: 18,
  },
};

export const glassTheme: Record<ResolvedGlassMode, GlassThemeToken> = {
  light: {
    bg: "rgba(255,255,255,0.28)",
    border: "rgba(0,56,0,0.25)",
    text: "#363636",
    glow: ["rgba(255,255,255,0.4)", "rgba(255,255,255,0.05)"],
  },

  dark: {
    bg: "rgba(0,0,0,0.45)",
    border: "rgba(255,255,255,0.14)",
    text: "#FFFFFF",
    glow: ["rgba(0,255,255,0.35)", "rgba(0,255,255,0.03)"],
  },

  // 🧬 MEDICAL / HIPAA SAFE
  medical: {
    bg: "rgba(245,247,250,0.2)", // almost opaque
    border: "rgba(0,0,0,0.42)",
    text: "#363636", // slate-900
    glow: ["rgba(0,160,255,0.15)", "rgba(0,160,255,0.02)"],
  },

  neon: {
    bg: "rgba(0,0,0,0.55)",
    border: "rgba(0,255,255,0.35)",
    text: "#E0FFFF",
    glow: ["rgba(0,255,255,0.65)", "rgba(0,255,255,0.05)"],
  },
};
