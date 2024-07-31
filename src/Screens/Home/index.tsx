import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Event } from "../../components/Event";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';


export function Home() {

  interface EventType {
    id: string,
    name: string,
    status: boolean
  }

  const [idGenerator, setIdGenerator] = useState<number>(1);
  const [events, setEvents] = useState<EventType[]>([]);
  const [eventName, setEventName] = useState('');


  function handleEventAdd() {
    if (eventName === null || eventName.trim().length === 0) {
      Alert.alert("Atenção!", "Preencha o campo")
      return;
    }
    setIdGenerator(prevState => prevState + 1)
    const event: EventType = { id: String(idGenerator), name: eventName.trim(), status: false }

    setEvents(prevState => [...prevState, event])
    setEventName("")
  }

  function handleEventRemove(id: string) {
    Alert.alert("Remover", `Remover o participante ${id}`,
      [
        {
          text: "Sim",
          onPress: () => { setEvents(prevState => prevState.filter((e) => e.id != id)) }
        },
        {
          text: "Não",
          style: 'cancel'
        }
      ]
    );
  }

  function handleChangeStatusEvent(id: string) {

    const eventsItemNames = events.
      map((event) => {
        if (event.id === id) {
          event.status = !event.status
        }
        return event
      });

    setEvents(eventsItemNames);
  }


  return (
    <>
      <View style={styles.header}>
        <EvilIcons style={styles.iconHeader} name="trash" size={40} color="#808080" />
        <Text style={styles.textHeader}>
          todo
        </Text>
      </View>
      <View style={styles.container}>



        <View style={styles.form}>
          <TextInput style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#F2F2F2"
            value={eventName}
            onChangeText={setEventName}
            maxLength={30}
          >
          </TextInput>

          <TouchableOpacity onPress={handleEventAdd} style={styles.button}>
            <View style={styles.circleButton}>

              <Text style={styles.textButton}> + </Text>
            </View>

          </TouchableOpacity>
        </View>


        <View style={styles.containerRegisters} >
          <View style={styles.registers} >
            <Text style={styles.textRegisters}> Criadas {events.length} </Text>
            <Text style={styles.textRegisters2} > Concluídas {events.filter(event => event.status).length}  </Text>
          </View>
        </View>

        <View style={styles.viewList}>
          <FlatList
            data={events}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Event key={item.id}
                id={item.id}
                name={item.name}
                status={item.status}
                onRemove={handleEventRemove}
                onChangeStatus={handleChangeStatusEvent} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.viewEmpty}>
                <MaterialCommunityIcons name="file-document-outline" size={56} color="#FDFCFE" />
                <Text style={styles.listEmptyText} > Você ainda não tem tarefas cadastradas </Text>
                <Text style={styles.listEmptyText} > Crie tarefas e organize seus items a fazer </Text>
              </View>
            )}

          />
        </View>

      </View>
    </>
  );
}


