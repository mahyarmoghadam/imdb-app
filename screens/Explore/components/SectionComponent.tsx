
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { GestureResponderEvent, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export interface SectionComponentProps {
  actionButtonText?: string,
  headerTitle?: string,
  headerIcon?: string,
  actionButtonEvent?: ((event: GestureResponderEvent) => void) | undefined;
  children: JSX.Element,
  style?: Record<string, any>
}

export default function SectionComponent({ headerIcon, headerTitle, style, children, actionButtonText, actionButtonEvent }: SectionComponentProps) {
  const theme = useTheme();

  return (
    <Block style={[styles.container, style, { backgroundColor: theme.background }]}>
      <Block style={[styles.headerContainer, { backgroundColor: theme.background }]}>
        <Block style={styles.headerTitle}>
          <FontAwesome
            size={24}
            name={headerIcon}
            color={theme.textColor}
            style={styles.headerTitleIcon}
          />
          <Text color={theme.text} style={[styles.headerTitleText, { color: theme.textColor }]}>{headerTitle}</Text>
        </Block>
        {actionButtonText &&
          <TouchableOpacity onPress={actionButtonEvent} style={styles.headerActionButton}>
            <Text style={[styles.actionButtonText, { color: theme.linkColor }]}>
              {actionButtonText}
            </Text>
          </TouchableOpacity>}
      </Block>
      {children}
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginVertical: 8
  },
  headerContainer: {
    maxHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4
  },

  headerTitle: {
    maxHeight: 32,
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  headerTitleIcon: {
    marginRight: 8,
  },

  headerTitleText: {
    fontSize: 20,
    fontWeight: '800',
  },
  headerActionButton: {
    fontSize: 8,
    padding: 0
  },
  actionButtonText: {
    fontSize: 16,
  }
})
