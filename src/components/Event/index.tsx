import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Checkbox from 'expo-checkbox';

interface Props {
    id: string;
    name: string,
    status: boolean
    onRemove: (id: string) => void;
    onChangeStatus: (id: string) => void;
}

export function Event({ id, name, status, onRemove, onChangeStatus }: Props) {
    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={status}
                onValueChange={() => onChangeStatus(id)}
                color={status ? '#5E60CE' : undefined}
            />

            <TouchableOpacity style={styles.buttonName} onPress={() => onChangeStatus(id)} >
                <Text style={{ ...styles.name, textDecorationLine: status ? 'line-through' : 'none' }} > {name} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onRemove(id)}>
                <EvilIcons name="trash" size={24} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}


