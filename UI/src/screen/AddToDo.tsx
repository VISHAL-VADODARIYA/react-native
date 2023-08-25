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
import Ui from '../Ui';
import Model from './Model';

const AddToDo = () => {
  const [task, setTask] = useState<Data>({
    id: uuid.v4() as string,
    title: '',
    discription: '',
    isCompleted: false,
  });
  const [update, setUpdate] = useState<boolean>(false);
  const [taskCompleted, setTaskCompleted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const AddTaskHandler = () => {
    if (task.title.trim() && task.discription.trim()) {
      console.log(task);
      task.title = task.title.trim();
      task.discription = task.discription.trim();
      dispatch(dataAction.add(task));
      setUpdate(false);
    }
    setTask({
      id: uuid.v4() as string,
      title: '',
      discription: '',
      isCompleted: false,
    });
  };

  const editHandler = (data: Data) => {
    setUpdate(true);
    setTask({...data, isCompleted: taskCompleted});
    console.warn(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addTaskView}>
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
        {update && (
          <TouchableOpacity
            style={[
              styles.completed,
              {backgroundColor: taskCompleted ? '#454545' : '#3abefc'},
            ]}
            onPress={() => {
              setTaskCompleted(true);
            }}>
            <Text style={{color: '#fff'}}>Completed</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.addButton} onPress={AddTaskHandler}>
          <Text style={styles.addButtonText}>
            {update ? 'Update' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
      <Model />
      <Ui edit={editHandler} />
    </SafeAreaView>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  addTaskView: {
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
    color: '#2d70ff',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#2d70ff',
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
  completed: {
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
