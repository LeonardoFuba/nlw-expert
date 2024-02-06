import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { View, FlatList } from "react-native";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="mt-4">
      <Header title="Faça seu pedido" cartQuantity={3} />

      <FlatList
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES}
        horizontal
        keyExtractor={(title) => title}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
      />
    </View>
  );
}
