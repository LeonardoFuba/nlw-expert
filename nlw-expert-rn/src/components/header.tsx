import { Image, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
  cartQuantity?: number;
};

export function Header({ title, cartQuantity = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image className="h-6 w-32" source={require("@/assets/logo.png")} />
        <Text className="text-white text-xl font-header mt-2">{title}</Text>
      </View>

      {cartQuantity > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="absolute -top-2 -right-2 z-10 bg-lime-300 w-4 h-4 rounded-full items-center justify-center">
            <Text className="text-slate-900 text-xs font-bold">
              {cartQuantity}
            </Text>
          </View>
          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
