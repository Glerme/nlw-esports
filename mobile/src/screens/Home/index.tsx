import { Image, View, FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";

import { GAMES } from "../../utils/games";

import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
};
