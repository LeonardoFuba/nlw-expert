import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  id?: string;
  title: string;
  description: string;
  thumbnail: ImageSourcePropType;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export function Product({ data, ...rest }: ProductProps) {
  return (
    <TouchableOpacity
      className="w-full flex-row items-center pb-4"
      activeOpacity={0.7}
      {...rest}
    >
      <Image className="w-20 h-20 rounded-md" source={data.thumbnail} />
      <View className="flex-1 ml-3">
        <Text className="text-slate-100 font-subtitle text-base flex-1">
          {data.title}
        </Text>
        <Text className="text-slate-400 font-body text-xs leading-5 mt-0.5">
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
