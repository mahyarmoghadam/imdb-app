import React from "react";
import { PersonHorizontalList, PersonItem } from "@components";
import { fakeCast } from "@models";

export default function HomeFavoritePeople() {
  return (
    <PersonHorizontalList
      data={fakeCast}
      renderItem={({ item }) => <PersonItem item={item} isCircle={true} />}
      title={"Favorite People"}
    />
  );
}
