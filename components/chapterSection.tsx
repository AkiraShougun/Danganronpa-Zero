import { router } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

type ChapterProps = {
  chapter: String;
  number: String;
};

import React from "react";

const Section = (props: ChapterProps) => {
  return (
    <Pressable onPress={() => router.push(`../chapters/${props.number}`)}>
      <View className="bg-[#0B567F] mt-4 mx-4 rounded-lg flex flex-row  p-4">
        <View className="justify-center px-2">
          <FontAwesome6 name={`${props.number}`} size={24} color="white" />
        </View>
        <View className="px-2">
          <Text className="text-white text-lg">ダンガンロンパゼロ</Text>
          <Text className="text-gray-400">{props.chapter}</Text>
        </View>
        <View className="object-contain pl-20 justify-center">
          <AntDesign name="right" size={24} color="white" />
        </View>
      </View>
    </Pressable>
  );
};

export default Section;
