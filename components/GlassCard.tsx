"use strict";

import React from "react";

import { Platform, StyleSheet, View } from "react-native";

import { BlurView } from "expo-blur";

import { LinearGradient } from "expo-linear-gradient";

import { glassTheme, glassTokens } from "@/theme/glass";
import { useTheme } from "@/theme/useTheme";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant: "card" | "modal" | "header";
}

export function GlassCard({
  children,
  className = "",
  variant,
}: GlassCardProps) {
  const { resolvedMode } = useTheme();
  const theme = glassTheme[resolvedMode];
  const token = glassTokens[variant];

  // 🤖 ANDROID (fake blur + neon glow)
  if (Platform.OS === "android") {
    return (
      <LinearGradient
        colors={theme.glow}
        style={{
          borderRadius: token.radius,
          borderWidth: 1,
          borderColor: theme.border,
        }}
        className={className}
      >
        <View
          style={{
            backgroundColor: theme.bg,
            borderColor: theme.border,
            padding: token.padding,
            borderRadius: token.radius,
            borderWidth: 1,
            overflow: "hidden",
          }}
        >
          {children}
        </View>
      </LinearGradient>
    );
  }

  return (
    <View style={{ borderRadius: token.radius }} className={className}>
      <LinearGradient colors={theme.glow} style={StyleSheet.absoluteFill} />
      <BlurView
        intensity={token.blur}
        tint={
          resolvedMode === "dark" || resolvedMode === "neon" ? "dark" : "light"
        }
        style={StyleSheet.absoluteFill}
      />
      <View
        style={{
          backgroundColor: theme.bg,
          borderColor: theme.border,
          padding: token.padding,
          borderRadius: token.radius,
          borderWidth: 1,
        }}
      >
        {children}
      </View>
    </View>
  );
}
