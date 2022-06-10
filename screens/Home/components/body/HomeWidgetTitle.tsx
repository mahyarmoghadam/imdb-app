import React from 'react'
import { Block, Text } from 'expo-ui-kit'
import { useTheme } from '@hooks'
import { SIZES } from '@constants';

export interface HomeWidgetTitleProps {
  title: string;
  onPress?: () => void;
}
export default function HomeWidgetTitle({ title, onPress }: HomeWidgetTitleProps) {
  const theme = useTheme();
  return (
    <Block row space="between">
      <Text size={18} color={theme.textColor}>
        {title}
      </Text>
      <Text size={16} color={theme.linkColor} marginRight={SIZES.base}>
        See all
      </Text>
    </Block>
  )
}