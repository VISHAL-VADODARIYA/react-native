import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {windowHeight} from '../utils/Dimensions';

const Drawer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Open Bottom Drawer</Text>
      </TouchableOpacity>

      <Modal deviceHeight={windowHeight - 300} isVisible={isVisible} style={styles.modal}>
        <View style={styles.addTaskView}>
          <Text style={styles.addTask}>Add Task</Text>
          <Text>Task Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={() => {}}
            placeholder="Enter Task Name"
          />
          <Text>Task Descrition</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={() => {}}
            placeholder="Enter Task Description"
          />

          <TouchableOpacity
            style={[styles.completed, {backgroundColor: '#3abefc'}]}>
            <Text style={{color: '#fff'}}>Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={() => {}}>
            <Text style={styles.addButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
          <Text style={styles.closeButtonText}>Save</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,

  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    height: 300, // Adjust the height as needed
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#e74c3c',
    fontSize: 16,
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

export default Drawer;
