import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/stores/cart-store";

export default function Product() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const cartStore = useCartStore();

  const product = PRODUCTS.find((item) => item.id === id)!;

  console.log(cartStore.products);

  function handleAddToCart() {
    cartStore.add(product);
    navigation.goBack();
  }

  return (
    <View className="flex-1">
      <Image
        className="w-full h-52"
        source={product.cover}
        resizeMode="cover"
      />

      <View className="flex-1 p-5 mt-8">
        <Text className="text-white text-xl font-header">{product.title}</Text>
        <Text className="text-lime-400 text-2xl font-header my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            className="text-slate-400 font-body text-base leading-6"
            key={ingredient}
          >
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/"></LinkButton>
      </View>
    </View>
  );
}
