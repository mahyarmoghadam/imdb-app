import { GenresItem, HomeBannerItem, MovieItem } from "@home-components";
import { useMovieList, useTheme, useMovieDetail } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { SearchBarComponent, SectionComponent } from "./components";
import { FlatList, StyleSheet, View } from 'react-native';
import HomeGenres from '../Home/components/body/HomeGenres';
import SectionItemComponent from "./components/SectionItemComponent";



const fakeMovieList: any[] = [];

export default function ExploreScreen() {
  const { data, isError, isLoading } = useMovieList(550, 1);

  const theme = useTheme();

  return (
    <Block style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.searchContainer, { backgroundColor: theme.background }]}>
        <SearchBarComponent />
      </View>
      {isError && <Text>Error</Text>}
      {isLoading ? <Text>Loading</Text> : <Block scroll>
        <Block >
          <SectionComponent
            actionButtonText="clear"
            headerTitle="Recent"
            headerIcon="search"
            actionButtonEvent={(e) => alert(e)} >
            <FlatList
              data={data?.data?.results.slice(0, 5) ?? []}
              horizontal
              renderItem={({ item }) => <SectionItemComponent item={item} />}
            />
          </SectionComponent>
        </Block >

        <SectionComponent
          headerTitle="Movies"
          headerIcon="file-movie-o"
          actionButtonEvent={(e) => alert(e)} >
          <Block row wrap>
            {data && data.data.results.map((item, index) => (
              <View key={index} style={{ width: '46%', margin: '2%', flexDirection: "row" }}>
                <SectionItemComponent item={item} />
              </View>
            ))}
          </Block>
        </SectionComponent>

        <SectionComponent
          headerTitle="Streaming and TV"
          headerIcon="tv"
          actionButtonEvent={(e) => alert(e)} >
          <Block row wrap>
            {data && data.data.results.map((item, index) => (
              <View key={index} style={{ width: '46%', margin: '2%', flexDirection: "row" }}>
                <SectionItemComponent item={item} />
              </View>
            ))}
          </Block>
        </SectionComponent>

        <SectionComponent
          headerTitle="Celebs"
          headerIcon="users"
          actionButtonEvent={(e) => alert(e)} >
          <Block row wrap>
            {data && data.data.results.map((item, index) => (
              <View key={index} style={{ width: '46%', margin: '2%', flexDirection: "row" }}>
                <SectionItemComponent item={item} />
              </View>
            ))}
          </Block>
        </SectionComponent>
      </Block>}
    </Block>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8
  },
  searchContainer: {
    paddingTop: 20,
    paddingVertical: 8
  }
});
