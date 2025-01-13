import { Stack } from "expo-router";
import { RecoilRoot } from "recoil";

export default function RootLayout() {
  return (
    <RecoilRoot>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="hotels/[id]"
          options={{ title: "Restaurant" }} // Set custom title for the restaurant detail page
        />
        <Stack.Screen
          name="addons/[id]"
          options={{ title: "Addons" }} // Set custom title for the restaurant detail page
        />
      </Stack>
    </RecoilRoot>
  );
}
