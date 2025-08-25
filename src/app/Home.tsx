import { View } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Home({ navigation }: StackRoutesProps<"home">) {
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        paddingTop: 54,
        backgroundColor: "#d0d2d8",
      }}
    >
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product")}
        />
      </Header>
    </View>
  );
}
