import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/Store';
import List from '../Components/List';
import {Color} from '../utils/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TaskForm from '../Components/TaskForm';
const HomeScreen = () => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);
  const selector = useSelector((state: RootState) => state.data);
  const TaskFormHandler = () => {
    setShowTaskForm(!showTaskForm);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{opacity: showTaskForm ? 0.5 : 1}}>
        <View style={styles.titleTextView}>
          <Text style={styles.titleText}>To Do</Text>
        </View>

        <List />
      </View>
      <View style={styles.taskView}>
        <TouchableOpacity activeOpacity={0.7} onPress={TaskFormHandler}>
          <View style={styles.dashline}></View>
        </TouchableOpacity>
        {!showTaskForm && (
          <TouchableOpacity
            onPress={TaskFormHandler}
            style={styles.taskTextView}>
            <Text style={styles.taskText}>
              <FontAwesome name="plus-circle" size={20} color="#fff" /> 
              Add Task
            </Text>
          </TouchableOpacity>
        )}
        {showTaskForm && <TaskForm />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  titleTextView: {},
  titleText: {
    fontSize: 30,
    marginHorizontal: 10,
    marginTop: 20,
    fontWeight: '800',
  },
  taskView: {
    backgroundColor: Color.blue,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dashline: {
    padding: 2,
    marginBottom: 5,
    marginTop: 10,
    width: 40,
    alignSelf: 'center',
    borderRadius: 3,
    // justifyContent: 'center',
    backgroundColor: Color.white,
  },
  taskText: {
    marginVertical: 15,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: Color.white,
  },
  taskTextView: {
    alignItems: 'center',
  },
});
