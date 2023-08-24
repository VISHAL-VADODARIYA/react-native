import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {dataAction} from '../ReduxStore/DataSlice';
import {Data} from '../ReduxStore/DataSlice';
import uuid from 'react-native-uuid';

const AddToDo = () => {
  const [task, setTask] = useState<Data>({
    id: uuid.v4() as string,
    title: '',
    discription: '',
    isCompleted: false,
  });
  const dispatch = useDispatch();
  const AddTaskHandler = () => {
    if (task.title && task.discription) {
      console.log(task);
      dispatch(dataAction.add(task));
    }
    setTask({
      id: uuid.v4() as string,
      title: '',
      discription: '',
      isCompleted: false,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.addTask}>Add Task</Text>
      <Text>Task Name</Text>
      <TextInput
        value={task.title}
        style={styles.textInput}
        onChangeText={text => setTask({...task, title: text})}
        placeholder="Enter Task Name"
      />
      <Text>Task Descrition</Text>
      <TextInput
        value={task.discription}
        style={styles.textInput}
        onChangeText={text => setTask({...task, discription: text})}
        placeholder="Enter Task Description"
      />
      <TouchableOpacity style={styles.addButton} onPress={AddTaskHandler}>
        <Text style={styles.addButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#b6c7d1',
  },
  textInput: {
    marginBottom: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  addTask: {
    color: '#0e4e75',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#0e4e75',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
