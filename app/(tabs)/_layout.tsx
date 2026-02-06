import TabIcon from "@/components/TabIcon";
import TopBar from "@/components/TopBar";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const ACTIVE_COLOR = "#FFFFFF";
const INACTIVE_COLOR = "#2b201e";

export default function Layout() {
  return (
    <View className="flex-1 bg-[#FFF6F4]">
      {/* Global Top Bar */}
      <TopBar />

      {/* Tabs */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fce9e5",
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 68,
            position: "absolute",
            borderWidth: 1,
            borderColor: "#F1D0CA",
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Home"
                icon={
                  <Feather
                    name="home"
                    size={22}
                    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  />
                }
                iconTextColor={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="stats"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Stats"
                icon={
                  <Ionicons
                    name="stats-chart"
                    size={22}
                    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  />
                }
              />
            ),
          }}
        />

        <Tabs.Screen
          name="heart"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Heart"
                icon={
                  <FontAwesome
                    name="heartbeat"
                    size={22}
                    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  />
                }
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Profile"
                icon={
                  <Feather
                    name="user"
                    size={22}
                    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
                  />
                }
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
