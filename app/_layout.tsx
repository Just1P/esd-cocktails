import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Acceuil" }} />
      <Stack.Screen name="counter" options={{ title: "Compteur" }} />
      <Stack.Screen name="list" options={{ title: "List de cocktails" }} />
    </Stack>
  );
}
