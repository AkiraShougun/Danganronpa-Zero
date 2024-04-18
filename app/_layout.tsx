import { Link, Stack } from "expo-router";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const RootLayout = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "ホームページ",
          headerStyle: { backgroundColor: "#062847" },
          headerTitleStyle: { color: "white" },
        }}
      />
      <Stack.Screen
        name="chapters/[id]"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#062847" },
          headerTitleStyle: { color: "white" },
          headerLeft: () => (
            <Link href={"/"}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default RootLayout;
