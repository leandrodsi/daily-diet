import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { Routes } from "@routes/index";
import { theme } from "@theme/index";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
