import { banners, fakeGenres, fakeMovieList } from "@fake-datas";
import { GenresItem, HomeBannerItem, MovieItem } from "@home-components";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { SearchBarComponent, SectionComponent } from "./components";
import { StyleSheet, View } from "react-native";
import HomeGenres from '../Home/components/body/HomeGenres';

export default function ExploreScreen() {
  const theme = useTheme();

  return (
    <Block style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.searchContainer, { backgroundColor: theme.background }]}>
        <SearchBarComponent />
      </View>
      <Block scroll>
        <SectionComponent
          actionButtonText="button"
          headerTitle="header Title"
          headerIcon="search"
          actionButtonEvent={(e) => alert(e)} >
          <FlatList
            data={fakeGenres}
            horizontal
            renderItem={({ item }) => <GenresItem item={item} />}
          />
        </SectionComponent>

        <SectionComponent
          actionButtonText="button"
          headerTitle="header Title"
          headerIcon="search"
          actionButtonEvent={(e) => alert(e)} >
          <Block style={{ flex: 1, justifyContent: 'flex-start' }}>
            <FlatList
              key={'#'}
              keyExtractor={item => "#" + item.movieName}
              numColumns={2}
              data={fakeMovieList}
              renderItem={({ item }) => <MovieItem item={item} />}
            />
          </Block>
        </SectionComponent>

        <SectionComponent
          headerTitle="header Title"
          headerIcon="search">
          <Block style={{ flex: 1, justifyContent: 'flex-start' }}>
            <FlatList
              key={'#'}
              keyExtractor={item => "#" + item.movieName}
              numColumns={2}
              data={fakeMovieList}
              renderItem={({ item }) => <MovieItem item={item} />}
            />
          </Block>
        </SectionComponent>

        <SectionComponent
          headerTitle="header Title"
          headerIcon="search">
          <Block style={{ flex: 1, justifyContent: 'flex-start' }}>
            <FlatList
              key={'#'}
              keyExtractor={item => "#" + item.movieName}
              numColumns={2}
              data={fakeMovieList}
              renderItem={({ item }) => <MovieItem item={item} />}
            />
          </Block>
        </SectionComponent>
      </Block>
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
