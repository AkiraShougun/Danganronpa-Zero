import { Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Story1 from "../../stories/1";
import Story2 from "../../stories/2";
import Story3 from "../../stories/3";
import Story4 from "../../stories/4";

const Stories: {
  [key: string]: typeof Story1 | typeof Story2 | typeof Story3 | typeof Story4;
} = {
  "1": Story1,
  "2": Story2,
  "3": Story3,
  "4": Story4,
};

const UserPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const Story = id ? Stories[id] : null;

  return (
    <ScrollView className="bg-[#062847]">
      {Story ? <Text className=" text-gray-300 m-5">{Story}</Text> : null}
    </ScrollView>
  );
};

export default UserPage;
