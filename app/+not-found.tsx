import { Stack } from "expo-router";
import { Button, StyleSheet } from "react-native";

import { TextElement } from "@/components/TextElement";
import { ThemedView } from "@/components/ThemedView";

import { useNavigation } from "@react-navigation/native";

export default function NotFoundScreen() {
  const navigation = useNavigation();
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <TextElement type="title">Something went wrong!</TextElement>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
