import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home Page",
          headerStyle: { backgroundColor: "#062847" },
        }}
      />
      <Stack.Screen
        name="chapters/chapterOne"
        options={{ headerTitle: "Chapter One" }}
      />
    </Stack>
  );
};

export default RootLayout;
