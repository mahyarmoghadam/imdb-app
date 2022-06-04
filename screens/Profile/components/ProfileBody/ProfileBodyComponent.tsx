import { Block } from "expo-ui-kit";
import React from "react";
import ProfileFavoritePeopleComponent from "./ProfileFavoritePeopleComponent";
import ProfileWishListComponent from "./ProfileWishListComponent";

export default function ProfileBodyComponent() {
  return (
    <Block>
      <ProfileWishListComponent />

      <ProfileFavoritePeopleComponent />
    </Block>
  );
}
