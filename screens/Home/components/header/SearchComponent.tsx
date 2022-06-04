import { FontAwesome } from "@expo/vector-icons";
import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function SearchComponent() {
  return ( 
      <Block paddingHorizontal={20} style={styles.container} row>
        <FontAwesome style={styles.searchIcon} color='#998396' size={25} name="search" />
        <TextInput style={styles.searchContainer}  placeholder="search" placeholderTextColor='#998396'/>
      </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    paddingHorizontal: 50,
    width: "100%",
    height: 60,
    borderRadius: 15,
    backgroundColor:'#382c3e',
    borderColor: "#000",
    borderWidth: 1,
    color:'#998396',
    fontWeight:'600'
    
  },

  searchIcon: {
    position: "absolute",
    left: 35,
    zIndex: 1,
  },
});
