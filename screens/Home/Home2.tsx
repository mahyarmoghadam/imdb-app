import { Block } from 'expo-ui-kit';
import { StyleSheet, Text } from 'react-native';


export default function HomeScreen2() {
    return (
        <Block>
            <Text>Hello</Text>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
