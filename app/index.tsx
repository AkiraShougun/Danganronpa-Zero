import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Hi</Text>
      <Pressable onPress={() => router.push("../chapters/chapterOne")}>
        <Text>Go here</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
