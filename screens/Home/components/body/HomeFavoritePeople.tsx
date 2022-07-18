import React from "react";
import { PersonHorizontalList, PersonItem } from "@components";
import { fakeCast, PopularPeople } from "@models";
import { usePopularPeople } from "@hooks";

export default function HomeFavoritePeople() {
  const { data } = usePopularPeople();

  return (
    <PersonHorizontalList
      data={data?.data?.results ?? []}
      renderItem={({ item }) => <PersonItem item={item} isCircle={false} />}
      title={"Favorite People"}
    />
  );
}
