import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/loading";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <SafeAreaView className="flex-1 pt-8 bg-slate-900">
      <StatusBar />
      {fontsLoaded ? <Slot /> : <Loading />}
    </SafeAreaView>
  );
}
