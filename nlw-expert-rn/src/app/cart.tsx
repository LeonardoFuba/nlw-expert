import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { LinkButton } from "@/components/link-button";
import { Product } from "@/components/product";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { Text, View, ScrollView, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Cart() {
  const cartStore = useCartStore();

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    )
  );

  function handleProductRemove(productToRemove: ProductCartProps) {
    Alert.alert(
      "Remover",
      `Deseja remover ${productToRemove.title} do carrinho ?`,
      [
        {
          text: "Cancelar",
        },
        {
          text: "Remover",
          onPress: () => cartStore.remove(productToRemove.id),
        },
      ]
    );
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="flex-1 p-5">
            {cartStore.products.length > 0 ? (
              cartStore.products.map((product) => (
                <Product
                  key={product.id}
                  data={product}
                  onPress={() => handleProductRemove(product)}
                />
              ))
            ) : (
              <Text className="text-slate-400 font-body text-center my-8 flex-1">
                Seu carrinho está vazio
              </Text>
            )}

            <View className="flex-row gap-2 items-center pt-5 mt-2 mb-4 border-t border-slate-700">
              <Text className="text-white font-subtitle text-xl">Total:</Text>
              <Text className="text-lime-400 font-header text-2xl">
                {total}
              </Text>
            </View>

            <Input
              placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
              onChangeText={() => {}}
              blurOnSubmit={true}
              onSubmitEditing={() => {}}
              returnKeyType="next"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 pb-8 gap-5">
        <Button disabled={cartStore.products.length === 0} onPress={() => {}}>
          <Button.Text>Enviar Pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
