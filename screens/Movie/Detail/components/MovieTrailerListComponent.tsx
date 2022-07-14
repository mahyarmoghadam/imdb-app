import { Block, Button } from "expo-ui-kit";
import React, { useCallback, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { MovieVideo } from "@models";
import { Layout } from "@constants";

const { width } = Layout.window;

export interface MovieTrailerListProps {
  data: MovieVideo | undefined;
}

export default function MovieTrailerListComponent({ data }: MovieTrailerListProps) {

  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <Block noflex paddingRight={10}>
      <YoutubePlayer
        height={250}
        width={width - 30}
        play={playing}
        videoId={data?.key}
        onReady={() => { setIsLoading(true) }}
        onChangeState={onStateChange}
      />
      <Button style={{ display: 'none' }} title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </Block>

  );
}