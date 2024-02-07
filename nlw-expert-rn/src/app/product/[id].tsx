import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Product() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-white">{id}</Text>
    </View>
  );
}
