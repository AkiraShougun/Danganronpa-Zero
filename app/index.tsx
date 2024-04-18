import { View } from "react-native";
import ChapterSection from "../components/chapterSection";

const HomePage = () => {
  return (
    <View className="flex-1 bg-[#062847]">
      <ChapterSection chapter="第1回" number="1" />
      <ChapterSection chapter="第2回" number="2" />
      <ChapterSection chapter="第3回" number="3" />
      <ChapterSection chapter="第4回" number="4" />
    </View>
  );
};

export default HomePage;
