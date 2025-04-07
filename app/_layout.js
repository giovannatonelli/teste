import { Stack, Tabs } from "expo-router";


export default function Layout() {
    return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="cesta" options={{ title: "Minha Cesta" }} />
      <Tabs.Screen name="eventos" options={{ title: "Eventos" }} />
    </Tabs>
  );
}
