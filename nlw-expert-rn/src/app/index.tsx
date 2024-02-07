import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState, useRef } from "react";
import { FlatList, SectionList, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList>(null);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantity={3} />

      <FlatList
        className="max-h-10 mt-5"
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: 20,
        }}
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

      <SectionList
        className="flex-1 p-5"
        contentContainerStyle={{ paddingBottom: 500 }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-white text-xl font-header mt-4 mb-3">
            {title}
          </Text>
        )}
      />
    </View>
  );
}
