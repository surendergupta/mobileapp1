"use strict";

import AppointmentCard from "@/components/AppointmentCard";
import ClinicalRecordsCard from "@/components/ClinicalRecordsCard";
import FocusCard from "@/components/FocusCard";
import HeroCard from "@/components/HeroCard";
import InsightCard from "@/components/InsightCard";
import MedicineReminderCard from "@/components/MedicineReminderCard";
import StatsGrid from "@/components/StatsGrid";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["#FFEDEA", "#FFF3F2", "#FFE8E3"]}
      className="flex-1 rounded-tl-3xl rounded-tr-3xl"
    >
      <ScrollView
        className="px-3 py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140, // important for tab bar
        }}
      >
        <HeroCard
          name="Ananya"
          title="Your vitals are within a "
          highlight="healthy range"
          updatedText="Last updated: Today, 9:30 AM"
          cta="View Full Overview"
        />

        <StatsGrid />

        <FocusCard
          items={[
            {
              icon: "favorite",
              text: "Hydration level check",
              tone: "primary",
            },
            {
              icon: "directions-walk",
              text: "5,000 steps goal",
              tone: "neutral",
            },
            { icon: "bedtime", text: "Sleep quality review", tone: "neutral" },
          ]}
        />

        <InsightCard text="Your blood pressure has stayed steady over the past week" />

        <ClinicalRecordsCard />

        <MedicineReminderCard
          title="Multivitamin"
          subtitle="Take 1 tablet after breakfast"
        />

        <AppointmentCard
          doctor="Dr. Rekha Sharma"
          specialty="OB-GYN"
          time="Tomorrow • 10:30 AM"
        />
      </ScrollView>
    </LinearGradient>
  );
}
